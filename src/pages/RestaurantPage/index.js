import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import API_KEY from '../../components/GetAPIKey';
import StarRating from '../../components/StarRating';
import DetailedRatings from './DetailedRatings';
import { AppState } from '../../reducers/AppContext';

export default function SelectedRestaurant() {
  const { restoApiData, setRestoApiData } = AppState();
  const { id } = useParams();
  const placeByIdUrl = `https://api.tomtom.com/search/2/place.json?entityId=${id}&key=${API_KEY}&view=IN`;

  async function FetchRestoApiData() {
    await axios
      .get(placeByIdUrl)
      .then((res) => {
        setRestoApiData(res.data.results[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    FetchRestoApiData();
  }, []);

  return !restoApiData ? (
    <div>404 error</div>
  ) : (
    <div>
      <h1>{restoApiData?.poi?.name}</h1>
      <h2>Star Rating</h2>
      <StarRating id={id} />
    </div>
  );
}
