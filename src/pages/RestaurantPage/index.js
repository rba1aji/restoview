import React, { useEffect, useState, useMemo } from 'react';
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
// import FetchCloudDataByAPIData from './FetchCloudDataByAPIData';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { db } from '../../configs/firebaseConfig';

export default function RestaurantPage() {
  const { id } = useParams();
  const [APIData, setAPIData] = useState();
  const [cloudData, setCloudData] = useState();
  const docRef = doc(db, 'restaurants', `${id}`);

  function HandleUndefined() {
    const newDocData = {
      views: 0,
      ratings: {
        star: 5, //change0
        types: {
          overall: [],
          food: [],
          service: [],
          quality: [],
          valueForMoney: [],
        },
      },
      reviews: [],
      address: APIData.address.freeformAddress,
      openingHours: APIData.openingHours ? APIData.openingHours : null,
      photos: [],
    };
    setDoc(docRef, newDocData)
      .then((res) => {
        FetchDataFromCloud();
      })
      .catch((err) => {
        // console.log(2);
        console.log(err);
      });
  }

  function FetchDataFromCloud() {
    console.log(2);
    getDoc(docRef)
      .then((res) => {
        if (res.data()) {
          setCloudData(res.data());
          console.log(res.data());
        } else {
          HandleUndefined();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  async function FetchDataFromAPI() {
    console.log(1);
    await axios
      .get(PlaceByIdUrl(id))
      .then((res) => {
        setAPIData(res.data.results[0]);
        console.log(res.data.results[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    FetchDataFromAPI();
  }, []);

  useMemo(() => {
    APIData?.id && FetchDataFromCloud();  
  }, [APIData?.id]); 

  // useEffect(() => {
  //   APIData?.id && FetchDataFromCloud();
  // }, [APIData]);

  useEffect(() => {
    UpdateViewsById(id);
  }, []);

  return !APIData ? (
    <div>Loading...</div>
  ) : (
    <div>
      <h1>{APIData?.poi?.name}</h1>
      <h2>Star Rating</h2>
      <StarRating ratings={cloudData?.ratings} />
      <DetailedRatings />
    </div>
  );
}
