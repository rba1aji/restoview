import React, { useEffect, useState, useMemo, useCallback } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import {StarRating, ShowReviews} from './components';
import DetailedRatings from './DetailedRatings';
import { PlaceByIdUrl } from '../../reducers/constants';
import UpdateViewsById from './UpdateViewsById';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { db } from '../../configs/firebaseConfig';
import { Button } from 'react-bootstrap';
import WriteAReview from './WriteAReview';
import { AppState } from '../../reducers/AppContext';
// import ShowReviews from '../'

export default function RestaurantPage() {
  const { id } = useParams();
  const [APIData, setAPIData] = useState();
  const [cloudData, setCloudData] = useState();
  const { refresh, loading, setLoading } = AppState();
  const docRef = doc(db, 'restaurants', `${id}`);

  const HandleUndefined = useCallback(() => {
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
        setLoading(false);
      });
  });

  const FetchDataFromCloud = useCallback(() => {
    getDoc(docRef)
      .then((res) => {
        if (res.data()) {
          setCloudData(res.data());
          console.log(res.data());
          setLoading(false);
        } else {
          console.log('undefined', res.data());
          HandleUndefined();
        }
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  });

  const FetchDataFromAPI = useCallback(() => {
    axios
      .get(PlaceByIdUrl(id))
      .then((res) => {
        setAPIData(res.data.results[0]);
        console.log(res.data.results[0]);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  });

  useEffect(() => {
    setLoading(true);
    FetchDataFromAPI();
  }, []);

  useMemo(() => {
    setLoading(true);
    APIData?.id && FetchDataFromCloud();
  }, [APIData?.id, refresh]);

  useEffect(() => {
    UpdateViewsById(id);
  }, []);

  return !APIData && !loading ? (
    <div>error not available</div>
  ) : (
    <>
      <h1
      // style={{ textAlign: 'left' }}
      >
        {APIData?.poi?.name}
      </h1>
      <h5
        className="font1"
        style={{
          marginLeft: '5vw',
        }}
      >
        Ratings
        <span style={{fontWeight:'normal'}}>({cloudData?.ratings?.types?.overall?.length}) </span>
      </h5>
      {cloudData?.ratings?.types?.overall?.length < 1 && (
        <p style={{ marginLeft: '5vw', marginRight: '2.5vw' }}>
          {`There aren't enough food, service, value or ambience ratings for ${APIData?.poi?.name}, India yet. Be one of the first to write a review!`}
        </p>
      )}
      <div
        // className="bg-light border"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center', 
          marginLeft: '6vw',
          marginRight: '6vw',
          paddingTop: '2vh',
        }}
      >
        <StarRating ratings={cloudData?.ratings} />
        <DetailedRatings ratings={cloudData?.ratings} />
      </div>
      <br />
      <WriteAReview hotelName={APIData?.poi.name} ratings={cloudData?.ratings} id={id} />
      <br/>
      <ShowReviews hotelName={APIData?.poi?.name} reviews={cloudData?.reviews}/>
    </>
  );
}
