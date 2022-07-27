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
  // console.log(props.numImg)
  const index = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <>
      {index.map((i) => {
        return <p>{props?.restos[i]?.id}</p>;
      })}
    </>
  );
}

export default function TopRated(props) {
  const [restos, setRestos] = useState([]);

  async function fetchAPIData() {
    await restos.map(async (resto, index) => {
      await axios
        .get(placeByIdUrl(resto.id))
        .then((res) => {
          const data = res.data.results[0];
          console.log(index);
          console.log(data.id, restos[index].id);
        })
        .catch((err) => {
          console.log(err);
        });
    });
  }

  function fetchTopRated() {
    setRestos([]);

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
            return [
              ...old,
              {
                id: doc.id,
                cloudData: doc.data(),
                APIData: {},
              },
            ];
          });
        });
      })
      .catch((err) => {
        console.log(err.message);
      });

    console.log(restos);
    console.log(props.state);
  }

  useEffect(() => {
    fetchTopRated();
    fetchAPIData();
  }, [props.state]);

  return (
    <>
      <Show numImg={props.numImg} restos={restos} />
    </>
  );
}
