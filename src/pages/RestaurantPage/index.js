import React, { useEffect, useState, useMemo, useCallback } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import StarRating from './StarRating';
import ShowReviews from './ShowReviews';
import DetailedRatings from './DetailedRatings';
import { PlaceByIdUrl } from '../../reducers/constants';
import UpdateViewsById from './UpdateViewsById';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { db } from '../../configs/firebaseConfig';
import { Button, Card } from 'react-bootstrap';
import WriteAReview from './WriteAReview';
import { AppState } from '../../reducers/AppContext';
import ContactAndAddress from './ContactAddress';
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
      <p style={{ marginLeft: '5vw', marginRight: '5vw' }}>
        {`${APIData?.poi.name}, one of the restaurants in ${APIData?.address.countrySecondarySubdivision}, ${APIData?.address.countrySubdivision}. Reviewed by ${cloudData?.ratings.types.food.length} people. `}
        {APIData?.poi.categories?.map((tag) => {
          return <span>{tag} </span>;
        })}
        {`. Having ${cloudData?.ratings?.star.toFixed(
          1
        )} star rating. Improve this listening by adding `}
          <WriteAReview
          className='py-0 px-2 mb-0'
            variant="outline-dark"
            placeHolder="your review"
            hotelName={APIData?.poi.name}
            ratings={cloudData?.ratings}
            id={id}
          />
      </p>
      <h4
        className="font2"
        style={{
          marginLeft: '5vw',
          marginRight: '5vw',
        }}
      >
        Ratings
        <span style={{ fontWeight: 'normal', fontSize: '12px' }}>
          {' '}
          ({cloudData?.ratings?.types?.overall?.length})
        </span>
      </h4>
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
      <div className="text-center m-0 p-0">
      <WriteAReview
        variant="dark"
        placeHolder="Write A Review"
        width="85%"
        hotelName={APIData?.poi.name}
        ratings={cloudData?.ratings}
        id={id}
      />
      </div>
      <br />
      <ShowReviews
        hotelName={APIData?.poi?.name}
        reviews={cloudData?.reviews}
      />
      <ContactAndAddress
        phone={APIData?.poi.phone}
        address={APIData?.address?.freeformAddress}
      />
      <br />
    </>
  );
}
