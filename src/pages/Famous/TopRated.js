import React from 'react';
import { db, storage } from '../../configs/firebaseConfig';
import { getStorage, ref, listAll, getDownloadURL } from 'firebase/storage';

export default function TopRated(props) {
  // const listRef = ref(storage, 'Top10');

  getDownloadURL(ref(storage, 'Top10/0.jpg'))
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.log(error.message);
    });

  return <></>;
}
