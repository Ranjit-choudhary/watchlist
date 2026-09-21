import {
  collection,
  addDoc,
  deleteDoc,
  doc,
  onSnapshot,
  updateDoc,
  writeBatch
} from "firebase/firestore";
import { db } from "../firebase";

export function watchlistRef(uid) {
  return collection(db, "users", uid, "watchlist");
}

export function subscribeWatchlist(uid, cb) {
  return onSnapshot(watchlistRef(uid), snap => {
    cb(snap.docs.map(d => ({ id: d.id, ...d.data() })));
  });
}

export function addWatch(uid, data) {
  return addDoc(watchlistRef(uid), data);
}

export function updateWatch(uid, id, data) {
  return updateDoc(doc(db, "users", uid, "watchlist", id), data);
}

export function removeWatch(uid, id) {
  return deleteDoc(doc(db, "users", uid, "watchlist", id));
}

export function reorderBucket(uid, orderedItems) {
  const batch = writeBatch(db);
  const now = Date.now();
  orderedItems.forEach((item, i) => {
    // Index 0 is top of stack, meaning highest timestamp.
    batch.update(doc(db, "users", uid, "watchlist", item.id), {
      addedToBucketAt: now - i * 1000
    });
  });
  return batch.commit();
}
