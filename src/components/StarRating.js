import React, { useState, useEffect, useCallback } from 'react';
import { Rating } from 'react-simple-star-rating';
import { db } from '../configs/firebaseConfig';
import { doc, onSnapshot, setDoc } from 'firebase/firestore';

export default function StarRatingForCard(props) {
  const [cloudData, setCloudData] = useState();
  const docRef = doc(db, 'restaurants', props.resto.id);
  // const docRef = restoDocRef(props.resto.id);

  const HandleUndefined = useCallback(() => {
    const newDocData = {
      views: 0,
      ratings: {
        star: 0,
        types: {
          overall: [],
          food: [],
          service: [],
          ambience: [],
          valueForMoney: [],
        },
      },
      reviews: [],
      address: props.resto.address,
      openingHours: props.resto.openingHours ? props.resto.openingHours : null,
      photos: [],
    };

    setDoc(docRef, newDocData)
      .then((res) => {
        unsubscribe();
      })
      .catch((err) => {
        console.log(err);
      });
  });

  const unsubscribe = onSnapshot(docRef, (doc) => {
    if (doc.data()) {
      setCloudData(doc.data());
    } else {
      HandleUndefined();
    }
  });

  useEffect(() => {
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <>
      <Rating
        ratingValue={(cloudData?.ratings?.star / 5) * 100}
        readonly="true"
        size="22px"
      />
      <div className="ps-1">views: {cloudData?.views}</div>
    </>
  );
}
