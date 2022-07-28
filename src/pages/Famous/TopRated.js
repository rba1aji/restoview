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
  const fetchAPI = () => {
    axios
      .get(placeByIdUrl(props.cloudData?.id))
      .then((res) => {
        const data = res.data.results[0];
        setAPIData(data);
        // console.log(data.id,props?.cloudData?.id)
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  useEffect(() => {
    console.log(props);
    fetchAPI();
  }, [props?.cloudData?.id]);

  useEffect(() => {
    console.log(APIData);
  }, [APIData]);
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
    await cloudData.map(async (item, index) => {
      await autoRetryFetch(item.id, index);
    });
  }

  function fetchTopRated() {
    setAPIData([]);
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
    fetchTopRated();
    cloudData.length == 10 && fetchAPIData();
  }, [props.state]);

  useEffect(() => {
    // console.log(APIData)
    console.log(cloudData, APIData, props.state);
  }, [props.state]);

  return <>{/* <Show numImg={props.numImg} cloudData={cloudData} /> */}</>;
}
