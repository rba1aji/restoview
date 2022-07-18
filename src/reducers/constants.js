import { db } from '../configs/firebaseConfig';
import { doc } from 'firebase/firestore';

export function restoDocRef(id) {
  return doc(db, 'restaurants', id);
}
