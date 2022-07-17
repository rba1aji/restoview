import React, { useState, useEffect } from 'react';
import { db } from '../configs/firebaseConfig';
import { doc, getDoc, setDoc, Timestamp } from 'firebase/firestore';

export default function StarRating(props) {
  function FetchData() {
    const docRef = doc(db, 'restaurants', props.id);
    getDoc(docRef)
      .then((res) => {
        if (res.data()) {
          console.log(res.data());
        } else {
          const docData = {
            id: props.id,
            ratings: {
              overall: 5,
              food: 5,
              service: 5,
              valueForMoney: 5,
            },
            reviews: [],
            photos: [],
          };
          setDoc(doc(db, 'restaurants', props.id), docData)
            .then((res) => {
              FetchData();
            })
            .catch((err) => {
              console.log(err, props.id);
            });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    FetchData();
  }, [props.id]);

  const stars = [];
  for (let i = 0; i < 4; i++) {
    stars.push(<span>⭐</span>);
  }

  return <div>{stars}</div>;
}
