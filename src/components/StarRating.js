import React, { useState, useEffect } from 'react';
import { db } from '../configs/firebaseConfig';
import { doc, getDoc, setDoc, onSnapshot } from 'firebase/firestore';
import { AppState } from '../reducers/AppContext';
import { Rating } from 'react-simple-star-rating';

export default function StarRating(props) {
  const { restoCloudData, setRestoCloudData } = AppState();

  function HandleUndefined() {
    const docData = {
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
    };
    setDoc(doc(db, 'restaurants', props.id), docData)
      .then((res) => {
        FetchData();
      })
      .catch((err) => {
        console.log(err, props.id);
      });
  }

  function FetchData() {
    const docRef = doc(db, 'restaurants', props.id);

    onSnapshot(docRef, (doc) => {
      if (doc.data()) {
        setRestoCloudData(doc.data());
      } else {
        HandleUndefined();
      }
    });
  }

  useEffect(() => {
    FetchData();
  }, []);

  const stars = [];
  for (let i = 0; i < restoCloudData?.ratings?.overall; i++) {
    stars.push(<span key={i}>⭐</span>);
  }

  return (
    <Rating
      ratingValue={(restoCloudData?.ratings?.overall / 20) * 500}
      readonly="true"
      size="25px"
    />
  );
}
