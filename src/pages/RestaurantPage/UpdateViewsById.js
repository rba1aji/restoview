import { restoDocRef } from '../../reducers/constants';
import { doc, updateDoc, increment } from 'firebase/firestore';

export default function UpdateViews(id) {
  updateDoc(restoDocRef(id), {
    views: increment(1),
  })
    .then((res) => {})
    .catch((err) => {});
}
