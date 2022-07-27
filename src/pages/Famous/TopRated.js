import React,{useState} from 'react';
import { db, storage } from '../../configs/firebaseConfig';
import { getStorage, ref, listAll, getDownloadURL } from 'firebase/storage';

export default function TopRated(props) {
  const [numImg, setnumImg] = useState([]);
  for (let i = 0; i < 10; i++) {
    getDownloadURL(ref(storage, `Top10/${i}.jpg`))
      .then((url) => {
        console.log(url);
        setnumImg((old)=>{
          return [...old,<img src={url}>];
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  }
  return <></>;
}
