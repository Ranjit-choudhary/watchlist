/**
 * Firebase Cloud Functions for Watchlist Email Notifications
 * 
 * Setup Instructions:
 * 1. Install Firebase CLI: npm install -g firebase-tools
 * 2. Login: firebase login
 * 3. Initialize: firebase init functions
 * 4. Install dependencies: cd functions && npm install
 * 5. Deploy: firebase deploy --only functions
 * 
 * Required packages:
 * - firebase-functions
 * - firebase-admin
 * - @sendgrid/mail (or your email service)
 */

const functions = require('firebase-functions');
const admin = require('firebase-admin');
const sgMail = require('@sendgrid/mail');

admin.initializeApp();

// Set your SendGrid API key in Firebase config:
// firebase functions:config:set sendgrid.key="YOUR_SENDGRID_API_KEY"
sgMail.setApiKey(functions.config().sendgrid?.key || process.env.SENDGRID_API_KEY);

const TMDB_API_KEY = '4bb9fd44f0907b5158c6a6db356c360e';
const TMDB_BASE = 'https://api.themoviedb.org/3';

/**
 * Scheduled function that runs daily to check for new episodes
 * and send email notifications
 */
exports.checkNewEpisodes = functions.pubsub
  .schedule('every 24 hours')
  .timeZone('America/New_York')
  .onRun(async (context) => {
    console.log('Starting daily episode check...');
    
    const db = admin.firestore();
    const usersSnapshot = await db.collectionGroup('watchlist').get();
    
    // Group items by user
    const userItems = {};
    usersSnapshot.forEach(doc => {
      const data = doc.data();
      const userId = doc.ref.parent.parent.id;
      if (!userItems[userId]) {
        userItems[userId] = [];
      }
      userItems[userId].push({ id: doc.id, ...data });
    });

    // Process each user
    for (const [userId, items] of Object.entries(userItems)) {
      try {
        // Get user settings
        const settingsRef = db.doc(`users/${userId}/settings/preferences`);
        const settingsDoc = await settingsRef.get();
        
        if (!settingsDoc.exists) continue;
        
        const settings = settingsDoc.data();
        
        // Skip if notifications disabled or no email
        if (!settings.emailNotifications || !settings.email) {
          continue;
        }

        // Check frequency
        const lastNotification = settings.lastNotificationDate || 0;
        const now = Date.now();
        const oneDay = 24 * 60 * 60 * 1000;
        const oneWeek = 7 * oneDay;

        if (settings.emailFrequency === 'daily' && (now - lastNotification) < oneDay) {
          continue;
        }
        if (settings.emailFrequency === 'weekly' && (now - lastNotification) < oneWeek) {
          continue;
        }

        // Check for new episodes
        const newEpisodes = [];
        
        for (const item of items) {
          if (item.type !== 'tv' || !item.tmdbId || !item.watchedSeason) continue;

          try {
            // Fetch latest episode info from TMDB
            const response = await fetch(
              `${TMDB_BASE}/tv/${item.tmdbId}?api_key=${TMDB_API_KEY}`
            );
            const details = await response.json();
            
            const lastEp = details.last_episode_to_air;
            if (!lastEp) continue;

            const lastSeason = lastEp.season_number;
            const lastInfo = `S${lastSeason} E${lastEp.episode_number}`;

            // Check if new season is available
            if (lastSeason > item.watchedSeason) {
              newEpisodes.push({
                title: item.title,
                poster: item.poster,
                lastSeason,
                lastInfo,
                watchedSeason: item.watchedSeason
              });
            }
          } catch (error) {
            console.error(`Error checking ${item.title}:`, error);
          }
        }

        // Send email if new episodes found
        if (newEpisodes.length > 0) {
          await sendNotificationEmail(settings.email, newEpisodes);
          
          // Update last notification date
          await settingsRef.update({
            lastNotificationDate: now
          });
          
          console.log(`Sent notification to ${settings.email} for ${newEpisodes.length} shows`);
        }
      } catch (error) {
        console.error(`Error processing user ${userId}:`, error);
      }
    }

    console.log('Daily episode check completed');
    return null;
  });

/**
 * Send email notification about new episodes
 */
async function sendNotificationEmail(email, newEpisodes) {
  const itemsList = newEpisodes.map(item => 
    `• ${item.title} - New Season ${item.lastSeason} available (you've watched up to Season ${item.watchedSeason})`
  ).join('\n');

  const msg = {
    to: email,
    from: 'noreply@yourdomain.com', // Change to your verified sender
    subject: `New Episodes Available - ${newEpisodes.length} Show${newEpisodes.length > 1 ? 's' : ''}`,
    text: `
Hello!

New episodes are available for shows in your watchlist:

${itemsList}

Visit your watchlist to see more details: https://your-app-url.com

Happy watching!
    `.trim(),
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #e50914;">New Episodes Available! 🔥</h2>
        <p>Hello!</p>
        <p>New episodes are available for <strong>${newEpisodes.length}</strong> show${newEpisodes.length > 1 ? 's' : ''} in your watchlist:</p>
        <ul style="list-style: none; padding: 0;">
          ${newEpisodes.map(item => `
            <li style="margin: 1rem 0; padding: 1rem; background: #f5f5f5; border-radius: 8px;">
              <strong>${item.title}</strong><br>
              New Season ${item.lastSeason} available (you've watched up to Season ${item.watchedSeason})
            </li>
          `).join('')}
        </ul>
        <p>
          <a href="https://your-app-url.com" 
             style="display: inline-block; padding: 0.75rem 1.5rem; background: #e50914; color: white; text-decoration: none; border-radius: 6px;">
            View Watchlist
          </a>
        </p>
        <p style="color: #666; font-size: 0.9rem; margin-top: 2rem;">
          You can manage your notification preferences in your account settings.
        </p>
      </div>
    `.trim()
  };

  try {
    await sgMail.send(msg);
    console.log(`Email sent to ${email}`);
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
}






