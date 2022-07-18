import React, { useState, useEffect } from 'react';
import { db } from '../configs/firebaseConfig';
import { doc, getDoc, setDoc, onSnapshot } from 'firebase/firestore';
import { AppState } from '../reducers/AppContext';

export default function StarRating(props) {
  const { setRestoCloudData } = AppState();

  useEffect(() => {
    function HandleUndefined() {
      const docData = {
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
          unsubs();
        })
        .catch((err) => {
          console.log(err, props.id);
        });
    }

    // function FetchData() {
    const docRef = doc(db, 'restaurants', props.id);

    const unsubs = onSnapshot(docRef, (doc) => {
      if (doc.data()) {
        setRestoCloudData(doc.data());
        console.log(doc.data());
      } else {
        HandleUndefined();
      }
    });
    // }

    unsubs();
  }, []);

  const stars = [];
  for (let i = 0; i < 4; i++) {
    stars.push(<span key={i}>⭐</span>);
  }

  return <div>{stars}</div>;
}
