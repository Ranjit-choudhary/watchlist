import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../firebase";

export async function getUserSettings(uid) {
  const settingsRef = doc(db, "users", uid, "settings", "preferences");
  const settingsSnap = await getDoc(settingsRef);
  
  if (settingsSnap.exists()) {
    return settingsSnap.data();
  }
  
  // Return default settings
  return {
    emailNotifications: false,
    emailFrequency: "daily", // "daily", "immediate", "weekly"
    email: null,
    calendarIntegration: false
  };
}

export async function updateUserSettings(uid, settings) {
  const settingsRef = doc(db, "users", uid, "settings", "preferences");
  await setDoc(settingsRef, {
    ...settings,
    updatedAt: Date.now()
  }, { merge: true });
}



