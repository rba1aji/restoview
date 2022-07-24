import { db } from '../../configs/firebaseConfig';
import { doc, updateDoc, arrayUnion } from 'firebase/firestore';
import { AppState } from '../../reducers/AppContext';
import Main from './index';
import React, { useEffect } from 'react';

export default function UpdateRatingInCloud(props) {
  const d = new Date();
  const docRef = doc(db, 'restaurants', props.id);
  // console.log(props);

  // for(const type in props.ratings){
  //   updateDoc(docRef,{
  //     `ratings.types.${type}` : arrayUnion({
  //       date:new Date(),
  //       uId:props.uId,
  //       val:props.ratings[type]/100*5,
  //     }),
  //   }).then(()=>{}).catch(()=>{});
  // }

  updateDoc(docRef, {
    reviews: arrayUnion({
      uId: props.uId,
      name: props.name,
      val: props.review,
      date: d.getDate() + '-' + d.getMonth() + '-' + d.getYear(),
    }),
    'ratings.star': props.star,
    'ratings.types.ambience': arrayUnion({
      key: props.uId + d,
      val: (props.ratings.ambience / 100) * 5,
    }),
    'ratings.types.service': arrayUnion({
      key: props.uId + d,
      val: (props.ratings.service / 100) * 5,
    }),
    'ratings.types.food': arrayUnion({
      key: props.uId + d,
      val: (props.ratings.food / 100) * 5,
    }),
    'ratings.types.valueForMoney': arrayUnion({
      key: props.uId + d,
      val: (props.ratings.valueForMoney / 100) * 5,
    }),
    'ratings.types.overall': arrayUnion({
      key: props.uId + d,
      val: (props.ratings.overall / 100) * 5,
    }),
  })
    .then((res) => {
      console.log(res);
      console.log('success upload rating');
      props.onHide();
      props.refresh();
      props.setAlert();
    })
    .catch((err) => {
      console.log(err.message);
    });
}
