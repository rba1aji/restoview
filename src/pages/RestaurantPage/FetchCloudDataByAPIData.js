import { db } from '../../configs/firebaseConfig';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import API_KEY from '../../reducers/API_KEY';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { AppState } from '../../reducers/AppContext';

export default function FetchCloudData(APIData) {
  const [cloudData, setCloudData] = useState();
  const docRef = doc(db, 'restaurants', APIData.id);

  function HandleUndefined() {
    const newDocData = {
      views: 0,
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
      address: APIData.address,
      openingHours: APIData.openingHours ? APIData.openingHours : null,
      photos: [{}],
    };

    setDoc(docRef, newDocData)
      .then((res) => {
        FetchData();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function FetchData() {
    getDoc(docRef)
      .then((res) => {
        if (res.data()) {
          setCloudData(res.data());
        } else {
          HandleUndefined();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    FetchData();
  }, []);  

  return cloudData;
}
