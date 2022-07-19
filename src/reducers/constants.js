import { db } from '../configs/firebaseConfig';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import API_KEY from './API_KEY';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { AppState } from './AppContext';

export function restoDocRef(id) {
  return doc(db, 'restaurants', id);
}

export function PlaceByIdUrl(id) {
  return `https://api.tomtom.com/search/2/place.json?entityId=${id}&key=${API_KEY}&view=IN`;
}
5;

export function FetchCloudData(APIData) {
  const { cloudData, setCloudData } = AppState();

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

    setDoc(retoDocRef(APIData.id), newDocData)
      .then((res) => {
        FetchData();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function FetchData() {
    getDoc(restoDocRef(APIData.id))
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
