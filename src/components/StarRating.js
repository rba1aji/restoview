import React, { useState } from 'react';
import { db } from '../configs/firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';

export default function StarRating(props) {
  const docRef = doc(db, 'restaurants', '0');

  getDoc(docRef)
    .then((doc) => {
      if (doc.exists) {
        console.log('Document data:', doc.data());
      } else {
        // doc.data() will be undefined in this case
        console.log('No such document!');
      }
    })
    .catch((error) => {
      console.log('Error getting document:', error);
    });

  const stars = [];
  for (let i = 0; i < 4; i++) {
    stars.push(<span>⭐</span>);
  }

  return <div>{stars}</div>;
}
