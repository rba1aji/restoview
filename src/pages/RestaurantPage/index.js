import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import API_KEY from '../../reducers/API_KEY';
import StarRating from '../../components/StarRating';
import DetailedRatings from './DetailedRatings';
import { AppState } from '../../reducers/AppContext';
import { restoDocRef } from '../../reducers/constants';
import { updateDoc, increment } from 'firebase/firestore';
import { PlaceByIdUrl } from '../../reducers/constants';

export default function SelectedRestaurant() {
  const { APIData, setAPIData } = AppState();
  const { id } = useParams();

  function UpdateViews() {
    updateDoc(restoDocRef(id), {
      views: increment(1),
    })
      .then((res) => {
        // console.log(1);
      })
      .catch((err) => {
        // console.log(err);
      });
  }

  async function FetchDataFromAPI() {
    await axios
      .get(PlaceByIdUrl(id))
      .then((res) => {
        setAPIData(res.data.results[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    FetchDataFromAPI();
    UpdateViews();
    console.log(0);
  }, []);

  return !APIData ? (
    <div>Loading...</div>
  ) : (
    <div>
      <h1>{APIData?.poi?.name}</h1>
      <h2>Star Rating</h2>
      <StarRating resto={APIData} />
    </div>
  );
}
