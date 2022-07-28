import React, { useState, useEffect, useCallback } from 'react';
import { db, storage } from '../../configs/firebaseConfig';
import {
  collection,
  query,
  where,
  getDocs,
  orderBy,
  limit,
} from 'firebase/firestore';
import axios from 'axios';
import { placeByIdUrl } from '../../reducers/URLs';

function Show2(props) {
  // console.log('show2')
  const [APIData, setAPIData] = useState();
  const fetchAPI=()=> {
    axios
      .get(placeByIdUrl(props.cloudData?.id))
      .then((res) => { 
        const data= res.data.results[0];
        setAPIData(data);
  // console.log(data,props?.cloudData?.id)
      })  
      .catch((err) => {
        console.log(err.message);
      });
  } 
  useEffect(() => { 
    console.log(props);
    fetchAPI();
  }, [props?.cloudData?.id]);

}

function Show(props) {
  // console.log(props.cloudData) 
  return (
    <>
      {props?.numImg?.map((url, index) => {
        return <Show2 numImgUrl={url} cloudData={props?.cloudData[index]} />;
      })}
    </>
  );
}

export default function TopRated(props) {
  const [cloudData, setCloudData] = useState([]);

  // async function fetchAPIData() {
  //   await restos.map(async (resto, index) => {
  //     await axios
  //       .get(placeByIdUrl(resto.id))
  //       .then((res) => {
  //         const data = res.data.results[0];
  //         console.log(index);
  //         console.log(data.id, restos[index].id);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   });
  // }

  function fetchTopRated() {
    setCloudData([]);

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
          setCloudData((old) => {
            return [
              ...old,
              {
                id: doc.id,
                data: doc.data(),
              },
            ];
          });
        });
      })
      .catch((err) => {
        console.log(err.message);
      });

    // console.log(cloudData);
    console.log(props.state);
  }

  useEffect(() => {
    fetchTopRated();
    // fetchAPIData();
  }, [props.state]);

  return (
    <>
      <Show numImg={props.numImg} cloudData={cloudData} />
    </>
  );
}
