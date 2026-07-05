# Watchlist

A React-based watchlist application built with Vite and Firebase. It includes drag-and-drop functionality for organizing your list.

## Features

- **TMDB Integration**: Seamlessly search and add movies and TV shows from The Movie Database (TMDB).
- **Progress Tracking**: Track the exact season and episode you have watched for TV series.
- **Tier List Ranking**: Rank your watchlist based on your eagerness to watch (1 to 5 flames).
- **New Episode Alerts**: Automatically highlights unwatched new episodes and upcoming releases.
- **Auto-Refresh**: Background data updates ensure release dates and episode info are always current.
- **Watch Trailers**: Embedded YouTube trailers for quick viewing before you decide to watch.
- **Bucket Organization**: Drag-and-drop items into different buckets/categories to organize your lists.
- **Filtering & Sorting**: Sort by urgency ("pain index"), eagerness, or last updated, and search your list.
- **User Authentication**: Secure login and cloud syncing via Firebase.

## Technologies Used

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Backend/Database**: Firebase (Firestore)
- **Drag and Drop**: @dnd-kit

## Prerequisites

Before you begin, ensure you have met the following requirements:
* You have installed Node.js and npm.

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd watchlist
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Running the App

To run the application in development mode:

```bash
npm run dev
```

This will start the Vite development server. Open the URL provided in your terminal (usually `http://localhost:5173`) to view it in the browser.

## Building for Production

To build the app for production to the `dist` folder:

```bash
npm run build
```

## Deployment

This project is set up to be deployed with Firebase Hosting. To deploy, ensure you have the Firebase CLI installed and are logged in, then run:

```bash
firebase deploy
```
