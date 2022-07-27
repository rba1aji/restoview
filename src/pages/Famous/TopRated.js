import React,{useState, useEffect} from 'react';
import { db, storage } from '../../configs/firebaseConfig';
import { getStorage, ref, listAll, getDownloadURL } from 'firebase/storage';

function Show(props){
  console.log(props.numImg.length);
  return (
    <div>
    {
      props.numImg.map((res,index)=>{
        return <img key={index} src={res.url} style={{width:'100%'}}/>;
      })
    }
    </div>
  )
}

export default function TopRated(props) {
  const [numImg, setNumImg] = useState([]);

  function getNumberImagesFromStorage(){
    for (let i = 0; i < 10; i++) {
      getDownloadURL(ref(storage, `Top10/${i}.jpg`))
        .then((url) => {
          setNumImg((old)=>{
            return [...old, {key:i, url:url}];
          })
        })
        .catch((error) => {
          console.log(error.message); 
        });
    }
    numImg.sort();
  }
  
  useEffect(()=>{
    getNumberImagesFromStorage();
  },[])

  return (
    <>
    {numImg.length>9&&<Show numImg={numImg}/>
}</>
  )
}
