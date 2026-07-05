# Watchlist

A React-based watchlist application built with Vite and Firebase. It includes drag-and-drop functionality for organizing your list.

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
