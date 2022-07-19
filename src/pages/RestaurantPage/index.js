import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import API_KEY from '../../reducers/API_KEY';
import StarRating from '../../components/StarRating';
import DetailedRatings from './DetailedRatings';
import { AppState } from '../../reducers/AppContext';
import { restoDocRef } from '../../reducers/constants';
import { updateDoc, increment } from 'firebase/firestore';
import { ApiRestoById } from '../../reducers/constants';

export default function SelectedRestaurant() {
  const { APIData, setAPIData } = AppState();
  const { id } = useParams();

  // function UpdateViews() {
  //   updateDoc(restoDocRef(restoApiData), {
  //     views: increment(1),
  //   })
  //     .then(() => {
  //       console.log(1);
  //     })
  //     .catch(() => {
  //       console.log(0);
  //     });
  // }

  const placeByIdUrl = `https://api.tomtom.com/search/2/place.json?entityId=${id}&key=${API_KEY}&view=IN`;

  async function FetchDataFromAPI() {
    await axios
      .get(placeByIdUrl)
      .then((res) => {
        setAPIData(res.data.results[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    FetchDataFromAPI();
  }, []);

  return !APIData ? (
    <div>Loading...</div>
  ) : (
    <div>
      <h1>{APIData?.poi?.name}</h1>
      <h2>Star Rating</h2>
      {/* <StarRating resto={apiData} /> */}
    </div>
  );
}
