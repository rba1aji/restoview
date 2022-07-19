import { db } from '../configs/firebaseConfig';
import { doc } from 'firebase/firestore';
import API_KEY from './API_KEY';
import axios from 'axios';
import React, { useState } from 'react';
import { AppState } from './AppContext';

export function restoDocRef(id) {
  return doc(db, 'restaurants', id);
}

export function PlaceByIdUrl(id) {
  return `https://api.tomtom.com/search/2/place.json?entityId=${id}&key=${API_KEY}&view=IN`;
}

export function FetchCloudData(APIData) {
  const { cloudData, setCloudData } = AppState();
  useEffect(() => {
    getDoc(restoDocRef(APIData))
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
  }, []);
}
