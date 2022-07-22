import { db } from '../../configs/firebaseConfig';
import { doc, updateDoc, arrayUnion } from 'firebase/firestore';
import { AppState } from '../../reducers/AppContext';
import React,{useCallback} from 'react';



export default function UpdateRatingInCloud(props) {

  console.log(props);
  const docRef = doc(db, 'restaurants', props.id);
  updateDoc(docRef, {
    reviews: arrayUnion({
      uId: props.uId,
      val: props.review,
    }),
    'ratings.types.ambience': arrayUnion({
      uId: props.uId,
      val: props.ratings.ambience,
    }),
    'ratings.types.service': arrayUnion({
      uId: props.uId,
      val: props.ratings.service,
    }),
    'ratings.types.food': arrayUnion({
      uId: props.uId,
      val: props.ratings.food,
    }),
    'ratings.types.valueForMoney': arrayUnion({
      uId: props.uId,
      val: props.ratings.valueForMoney,
    }),
    'ratings.types.overall': arrayUnion({
      uId: props.uId,
      val: props.ratings.overall,
    }),
  })
    .then((res) => {
      console.log(res);
      console.log('success upload rating');
      props.onHide();
      props.setAlert();
    })
    .catch((err) => {
      console.log(err.message);
    });
}
