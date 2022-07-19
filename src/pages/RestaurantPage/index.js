import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import API_KEY from '../../reducers/API_KEY';
import StarRating from './StarRating';
import DetailedRatings from './DetailedRatings';
import { AppState } from '../../reducers/AppContext';
import { restoDocRef } from '../../reducers/constants';
import { updateDoc, increment } from 'firebase/firestore';
import { PlaceByIdUrl } from '../../reducers/constants';
import UpdateViewsById from './UpdateViewsById';
import FetchCloudDataByAPIData from './FetchCloudDataByAPIData';

export default function SelectedRestaurant() {
  const { id } = useParams();
  const [APIData, setAPIData ] = useState();

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
    UpdateViewsById(id);
  }, []);

  const cloudData=FetchCloudDataByAPIData(APIData);


  return !APIData ? (
    <div>Loading...</div>
  ) : (
    <div>
      <h1>{APIData?.poi?.name}</h1>
      <h2>Star Rating</h2>
      <StarRating ratings={cloudData?.ratings} />
      <DetailedRatings/>
    </div>
  );
}
