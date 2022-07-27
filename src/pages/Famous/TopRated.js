import React, { useState, useEffect } from 'react';
import { db, storage } from '../../configs/firebaseConfig';
import { getStorage, ref, listAll, getDownloadURL } from 'firebase/storage';
import { collection, query, where, getDocs } from 'firebase/firestore';

function Show(props) {
  return (
    <div>
      {props.numImg.map((res, index) => {
        return <img key={index} src={res.url} style={{ width: '100%' }} />;
      })}
    </div>
  );
}

export default function TopRated(props) {
  const [numImg, setNumImg] = useState([]);
  const [restos, setRestos] = useState([]);

  async function fetchNumberImagesFromStorage() {
    for (let i = 0; i < 10; i++) {
      await getDownloadURL(ref(storage, `Top10/${i}.jpg`))
        .then((url) => {
          setNumImg((old) => {
            return [...old, { key: i, url: url }];
          });
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  }

  async function fetchTopRated() {
    console.log(props.state);
    const collectionRef = collection(db, 'restaurants');
    const q = query(citiesRef, where('address.state', '==', props.state));

    getDocs(collectionRef)
      .foEach((doc) => {
        console.log(doc.data());
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  useEffect(() => {
    fetchNumberImagesFromStorage();
    fetchTopRated();
  }, [props.state]);

  return (
    <>
      <Show numImg={numImg} />
    </>
  );
}
