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

### 2. Configure Firebase Function Config
```bash
firebase functions:config:set \
  sendgrid.key="YOUR_SENDGRID_API_KEY" \
  sendgrid.sender="noreply@yourdomain.com" \
  tmdb.key="YOUR_TMDB_API_KEY"
```

`sendgrid.sender` must be an address (or domain) verified in your SendGrid
account, or sends will be rejected. `tmdb.key` should be its own key
separate from the frontend's `VITE_TMDB_API_KEY` (see the root
`.env.example`).

Optionally override the link used in notification emails (defaults to
`https://<project-id>.web.app`):
```bash
firebase functions:config:set app.url="https://your-custom-domain.com"
```

The function checks all three of `sendgrid.key`, `sendgrid.sender`, and
`tmdb.key` at run time and skips the run (logging an error) if any are
missing, so a partial deploy fails loudly instead of silently no-op'ing.

### 3. Deploy Functions
```bash
firebase deploy --only functions
```

### 4. Verify Deployment
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






