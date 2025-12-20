# Email Notifications Setup Guide

## Prerequisites
1. Firebase project with Firestore enabled
2. SendGrid account (or another email service)
3. Firebase CLI installed

## Setup Steps

### 1. Install Dependencies
```bash
cd functions
npm install
```

### 2. Configure SendGrid API Key
```bash
firebase functions:config:set sendgrid.key="YOUR_SENDGRID_API_KEY"
```

Or set as environment variable:
```bash
export SENDGRID_API_KEY="your-api-key"
```

### 3. Update Email Sender
Edit `functions/index.js` and change:
```javascript
from: 'noreply@yourdomain.com', // Change to your verified sender
```

### 4. Update App URL
Edit `functions/index.js` and change:
```javascript
Visit your watchlist to see more details: https://your-app-url.com
```

### 5. Deploy Functions
```bash
firebase deploy --only functions
```

### 6. Verify Deployment
Check Firebase Console > Functions to see the scheduled function.

## How It Works

1. **Scheduled Function**: Runs every 24 hours
2. **Checks All Users**: Scans all watchlist items
3. **Compares Episodes**: Checks TMDB for latest episodes vs watched status
4. **Sends Emails**: Sends notification if new episodes found
5. **Respects Preferences**: Only sends based on user's frequency setting

## Testing

To test locally:
```bash
firebase emulators:start --only functions
```

Then trigger manually:
```bash
firebase functions:shell
checkNewEpisodes()
```

## Email Service Alternatives

If not using SendGrid, you can replace with:
- **Mailgun**: `mailgun-js` package
- **AWS SES**: `aws-sdk` package
- **Resend**: `resend` package

Just update the `sendNotificationEmail` function accordingly.





