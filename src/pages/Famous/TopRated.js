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
import { Card } from 'react-bootstrap';

function Show(props) {
  useEffect(() => {
    console.log(props.cloudData, props.APIData, props.state);
  }, [props.state]);
  return (
    <>
      {
        // props?.cloudData?.length == 10 &&
        //   props?.APIData?.length == 10 && 
        props?.numImg?.map((url, index) => {
          return (
            <Card key={index}>
              <Card.Title>
                {props?.cloudData[index]?.id}
                {props?.APIData[index]?.poi?.name}
              </Card.Title>
            </Card>
          );
        })
      }
    </>
  );
}

export default function TopRated(props) {
  const [cloudData, setCloudData] = useState([]);
  const [APIData, setAPIData] = useState([]);

  const autoRetryFetch= useCallback(async (id, index)=> {
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
  });

  const fetchAPIData=useCallback(()=> {
    cloudData.map(async (item, index) => {
      await autoRetryFetch(item.id, index);
    });
  });

  const fetchTopRated=useCallback(()=> {
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
        setCloudData([]);
        // setAPIData([])
        res.docs.map((doc,index) => {
          setCloudData((old) => {
            // return [
            //   ...old,
            //   {
            //     id: doc.id,
            //     data: doc.data(),
            //   },
            // ];
            const t = old; 
            t[index] = { id: doc.id, data: doc.data };
            return t;
          });
          // fetchAPIData()
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  });

  useEffect(() => {
    fetchTopRated();
    fetchAPIData();
  }, [props]);

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
