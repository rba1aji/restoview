import React from 'react';
import axios from 'axios';
export default function Search() {
  const KEY = `O1W6gyHOMcvAfFFPGxQOGR2mBzWUAH2P`;
  // const baseUrl = ``;
  const searchUrl = `https://{baseURL}/search/{versionNumber}/search/{query}.json?key={Your_API_Key}&limit={limit}&categorySet={categorySet}`;
  const URL='https://api.tomtom.com/search/2/search/ammanhotel.json?catagorySet=restaurant&&key=O1W6gyHOMcvAfFFPGxQOGR2mBzWUAH2P'

  axios.get(URL))
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
  return (
    <>
      <input/>
    </>
  );
}
