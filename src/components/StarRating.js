import React, { useState, useEffect } from 'react';
import { db } from '../configs/firebaseConfig';
import { doc, getDoc, setDoc, onSnapshot } from 'firebase/firestore';
import { AppState } from '../reducers/AppContext';
import { Rating } from 'react-simple-star-rating';
import { restoDocRef } from '../reducers/constants';

export default function StarRating(props) {
  const { restoCloudData, setRestoCloudData } = AppState();
  // const docRef = doc(db, 'restaurants', props.resto.id);
  const docRef = restoDocRef(props.resto.id);

  function HandleUndefined() {
    const newDocData = {
      ratings: {
        star: 5,
        collection: {
          overall: [{}],
          food: [{}],
          service: [{}],
          quality: [{}],
          valueForMoney: [{}],
        },
      },
      reviews: [{}],
      photos: [{}],
      views: 0,
      address: props.resto.address,
      openingHours: props.resto.openingHours ? props.resto.openingHours : null,
    };

    setDoc(docRef, newDocData)
      .then((res) => {
        unsubscribe();
      })
      .catch((err) => {
        console.log(err, props.resto.id);
      });
  }

  // function FetchData() {

  const unsubscribe = onSnapshot(docRef, (doc) => {
    if (doc.data()) {
      setRestoCloudData(doc.data());
    } else {
      HandleUndefined();
    }
  });
  // }

  useEffect(() => {
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <Rating
      ratingValue={(restoCloudData?.ratings?.star / 5) * 500}
      readonly="true"
      size="25px"
    />
  );
}
