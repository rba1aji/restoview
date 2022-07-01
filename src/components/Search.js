import React from 'react';
import axios from 'axios';

export default function Search() {
  const KEY = `O1W6gyHOMcvAfFFPGxQOGR2mBzWUAH2P`;
  // const searchUrl = `https://{baseURL}/search/{versionNumber}/search/{query}.json?key={Your_API_Key}&limit={limit}&categorySet={categorySet}`;
  const URL = `https://api.tomtom.com/search/2/search/ammanhotel.json?catagorySet=restaurant&key=${KEY}`;

  axios
    .get(URL)
    .then((res) => {
      console.log(JSON.stringify(res.data));
    })
    .catch((error) => {
      console.log(error);
    })
    .then(function () {});
  return (
    <>
      <input />
    </>
  );
}
