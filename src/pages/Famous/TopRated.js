import React from 'react';
import { db, storage } from '../../configs/firebaseConfig';
import { getStorage, ref, listAll } from 'firebase/storage';

export default function TopRated(props) {
  const listRef = ref(storage, 'Top10');

  storage
    .ref()
    .child('Top10')
    .listAll()
    .then((res) => {
      console.log(res);
      res.items.map((itemRef) => {
        console.log(itemRef.getDownloadURL());
      });
    })
    .catch((error) => {
      console.log(error.message);
    });

  return <></>;
}
