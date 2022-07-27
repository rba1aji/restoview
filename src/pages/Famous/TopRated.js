import React from 'react';
import { db, storage } from '../../configs/firebaseConfig';
import { getStorage, ref, listAll, getDownloadURL } from 'firebase/storage';

export default function TopRated(props) {
  const listRef = ref(storage, 'Top10');

  listAll(listRef) 
    .then((res) => {
      console.log(res)
      res.items.forEach((itemRef) => {
        console.log(itemRef.getDownloadURL());
      });
    }) 
    .catch((error) => {
      console.log(error.message);
    });

  return <></>;
}
