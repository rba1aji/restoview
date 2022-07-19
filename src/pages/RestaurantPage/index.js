import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import API_KEY from '../../reducers/API_KEY';
import StarRating from '../../components/StarRating';
import DetailedRatings from './DetailedRatings';
import { AppState } from '../../reducers/AppContext';
import { restoDocRef } from '../../reducers/constants';
import { updateDoc, increment } from 'firebase/firestore';
import { AppState } from '../../constants/AppContext';

export default function SelectedRestaurant() {
  const { restoApiData, setRestoApiData } = AppState();
  const { id } = useParams();
  const placeByIdUrl = `https://api.tomtom.com/search/2/place.json?entityId=${id}&key=${API_KEY}&view=IN`;

  function UpdateViews() {
    updateDoc(restoDocRef(restoApiData), {
      views: increment(1),
    })
      .then(() => {
        console.log(1);
      })
      .catch(() => {
        console.log(0);
      });
  }

  async function FetchRestoApiData() {
    await axios
      .get(placeByIdUrl)
      .then((res) => {
        setRestoApiData(res.data.results[0]);
        UpdateViews();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    FetchRestoApiData();
  }, []);

  return !restoApiData ? (
    <div>Loading...</div>
  ) : (
    <div>
      <h1>{restoApiData?.poi?.name}</h1>
      <h2>Star Rating</h2>
      <StarRating resto={restoApiData} />
    </div>
  );
}
