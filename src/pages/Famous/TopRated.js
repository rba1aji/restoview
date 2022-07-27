import React, { useState, useEffect } from 'react';
import { db, storage } from '../../configs/firebaseConfig';
import {
  collection,
  query,
  where,
  getDocs,
  orderBy,
  limit,
} from 'firebase/firestore';

function Show(props) {
  // console.log(props.numImg)
  return (
    <div>
      {props.numImg.map((res, index) => {
        return <img key={index} src={res.url} style={{ width: '100%' }} />;
      })}
    </div>
  );
}

export default function TopRated(props) {
  const [restos, setRestos] = useState([]);

  function fetchAPIData(id){
    
  }

  function fetchTopRated() {
    console.log(props.state);

    const collectionRef = collection(db, 'restaurants');
    const q =
      props.state == 'India'
        ? query(collectionRef, orderBy('ratings.star', 'desc'), limit(10))
        : query(
            collectionRef,
            where('address.state', '==', props.state),
            orderBy('ratings.star', 'desc'),
            limit(10)
          );

    getDocs(q)
      .then((res) => {
        res.docs.map((doc) => {
          setRestos((old) => {
            return [...old, { id: doc.id, cloudData: doc.data(), APIData:fetchAPIData(doc.id) }];
          });
        });
        console.log(restos);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  useEffect(() => {
    fetchTopRated();
  }, [props.state]);

  return (
    <>
      <Show numImg={props.numImg} />
    </>
  );
}
