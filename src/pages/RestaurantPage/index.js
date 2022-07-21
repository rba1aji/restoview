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
import { Button } from 'react-bootstrap';
import WriteAReview from './WriteAReview';

export default function RestaurantPage() {
  const { id } = useParams();
  const [APIData, setAPIData] = useState();
  const [cloudData, setCloudData] = useState();
  const docRef = doc(db, 'restaurants', `${id}`);

  function HandleUndefined() {
    const newDocData = {
      views: 0,
      ratings: {
        star: 0,
        types: {
          overall: [], // overall: [{ id: 'none', value: 0 }],
          food: [],
          service: [],
          ambience: [],
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
        console.log(err);
      });
  }

  function FetchDataFromCloud() {
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

  useEffect(() => {
    UpdateViewsById(id);
  }, []);

  return !APIData ? (
    <div>Loading...</div>
  ) : (
    <>
      <h1
      // style={{ textAlign: 'left' }}
      >
        {APIData?.poi?.name}
      </h1>
      <h4 className="font1">
        Ratings({cloudData?.ratings?.types?.overall?.length})
      </h4>
      <div
        className="bg-light border"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          marginLeft: '5vw',
          marginRight: '5vw',
          paddingTop: '2vh',
        }}
      >
        <StarRating ratings={cloudData?.ratings} />
        <DetailedRatings ratings={cloudData?.ratings} />
      </div>
      <br />
      <WriteAReview ratings={cloudData?.ratings} />
      <br />
      {cloudData?.ratings?.types?.overall?.length < 3 && (
        <p style={{ marginLeft: '5vw', marginRight: '2.5vw' }}>
          {`There aren't enough food, service, value or ambience ratings for ${APIData?.poi?.name}, India yet. Be one of the first to write a review!`}
        </p>
      )}
    </>
  );
}
