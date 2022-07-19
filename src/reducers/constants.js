import { db } from '../configs/firebaseConfig';
import { doc } from 'firebase/firestore';

export function restoDocRef(id) {
  return doc(db, 'restaurants', id);
}

export async function ApiRestoById(id) {
  await axios
    .get(placeByIdUrl)
    .then((res) => {
      return res.data.results[0];
    })
    .catch((err) => {
      console.log(err);
    });
}
