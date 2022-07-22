import { db } from '../../configs/firebaseConfig';
import { doc, updateDoc } from 'firebase/firestore';

export default function UpdateRatingInCloud(props) {
  docRef = doc(db, 'restaurants', props.id);
  console.log(props);
}
