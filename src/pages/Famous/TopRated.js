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

function Show(props) {
  useEffect(() => {
    console.log(props.cloudData, props.APIData, props.state);
  }, [props.state]);
  return (
    <>
      {props?.numImg?.map((url, index) => {
        return;
      })}
    </>
  );
}

export default function TopRated(props) {
  const [cloudData, setCloudData] = useState([]);
  const [APIData, setAPIData] = useState([]);

  async function autoRetryFetch(id, index) {
    await axios
      .get(placeByIdUrl(id))
      .then((res) => {
        const data = res.data.results[0];
        // console.log(index);
        // console.log(data.id, cloudData[index].id);
        setAPIData((old) => {
          const t = old;
          t[index] = data;
          return t;
        });
        // setAPIData((old)=>{
        //   return [...old,data];
        // })
      })
      .catch((err) => {
        // console.log(err.message);
        autoRetryFetch(id, index);
      });
  }

  async function fetchAPIData() {
    setAPIData([]);

    await cloudData.map(async (item, index) => {
      await autoRetryFetch(item.id, index);
    });
  }

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
  }

  useEffect(() => {
    // setAPIData([]);
    // setCloudData([]);
    fetchTopRated();
    fetchAPIData();
  }, [props.state]);

  return (
    <>
      <Show
        state={props.state}
        numImg={props.numImg}
        cloudData={cloudData}
        APIData={APIData}
      />
    </>
  );
}
