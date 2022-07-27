import React,{useState} from 'react';
import { db, storage } from '../../configs/firebaseConfig';
import { getStorage, ref, listAll, getDownloadURL } from 'firebase/storage';

export default function TopRated(props) {
  const [numImg, setNumImg] = useState([]);
  // const numImg=[];
  for (let i = 0; i < 10; i++) {
    getDownloadURL(ref(storage, `Top10/${i}.jpg`))
      .then((url) => {
        console.log(numImg);
        numImg.push(<img src={url}/>);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }
  return ;
}
