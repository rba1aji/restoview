import { db } from '../../configs/firebaseConfig';
import { doc, updateDoc, arrayUnion } from 'firebase/firestore';
import React,{useCallback} from 'react';

const UpdateRatingInCloud =useCallback((props)=> {
  console.log(props);
  const docRef = doc(db, 'restaurants', props.id);
  updateDoc(docRef, {
    reviews: arrayUnion(props.review),
    ratings: {
      types: {
        ambience: arrayUnion({
          uId: props.uId,
          val: props.ratings.ambience,
        }),
        service: arrayUnion({
          uId: props.uId,
          val: props.ratings.service,
        }),
        food: arrayUnion({
          uId: props.uId,
          val: props.ratings.food,
        }),
        valueForMoney: arrayUnion({
          uId: props.uId,
          val: props.ratings.valueForMoney,
        }),
        overall: arrayUnion({
          uId: props.uId,
          val: props.ratings.overall,
        }),
      },
    },
  })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err.message);
    });
});
export default 
