import React, { useEffect , useState } from 'react';
import axios from 'axios';

export default function Search() {
  const [input,setInput]=useState("");
  const KEY = `O1W6gyHOMcvAfFFPGxQOGR2mBzWUAH2P`;
  // const searchUrl = `https://{baseURL}/search/{versionNumber}/search/{query}.json?key={Your_API_Key}&limit={limit}&categorySet={categorySet}`;
  const URL = `https://api.tomtom.com/search/2/search/ammanhotel.json?catagorySet=restaurant&key=${KEY}`;
  
  var config = {
    method: 'get',
    url: URL,
    headers: {},
  };
   
  useEffect(() => {
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);


  return (
    <>
      <input
      placeholder="Search..."
      />
    </>
  );
}
