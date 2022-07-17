import React, { useState, useEffect } from 'react';
import { db } from '../configs/firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';

export default function StarRating(props) {
  function FetchData() {
    const docRef = doc(db, 'restaurants', props.id);
    getDoc(docRef)
      .then((res) => {
        console.log(res.data());
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    FetchData();
  }, []);

  const stars = [];
  for (let i = 0; i < 4; i++) {
    stars.push(<span>⭐</span>);
  }

  return <div>{stars}</div>;
}
