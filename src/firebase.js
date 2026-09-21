// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import {
  initializeFirestore,
  persistentLocalCache,
  persistentMultipleTabManager
} from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOkv2m83bRjvZuCVchdaQCMi7mGV7honY",
  authDomain: "wachtlist-maker.firebaseapp.com",
  projectId: "wachtlist-maker",
  storageBucket: "wachtlist-maker.firebasestorage.app",
  messagingSenderId: "441770745880",
  appId: "1:441770745880:web:ef58b31da2d0238415e36d",
  measurementId: "G-9PE7CJGMDK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Persistent local cache: watchlist renders instantly from IndexedDB on
// repeat visits while Firestore syncs the latest data in the background,
// instead of showing an empty list until the first server round-trip.
export const db = initializeFirestore(app, {
  localCache: persistentLocalCache({
    tabManager: persistentMultipleTabManager()
  })
});

// Auth
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

// Analytics (optional / browser-only)
let analytics;
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

export default app;