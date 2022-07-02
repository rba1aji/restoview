import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';

export default function Search() {
  const searchInputRef = useRef();
  const KEY = `O1W6gyHOMcvAfFFPGxQOGR2mBzWUAH2P`;
  let URL = undefined;

  function HandleOnPressItem() {
    ref.current.value="selected"
  }

  function HandleInputChange(e) {
    e.preventDefault();
    const query=searchInputRef.current.value
    console.log(query);
    URL = `https://api.tomtom.com/search/2/search/${encodeURIComponent(
      query
    )}.json?categorySet=7315&key=${KEY}`;
    axios
      .get(URL)
      .then((res) => {
        // console.log(JSON.stringify(res));
        console.log(
          res.data.results[0].poi.name,
          res.data.results[0].address.freeformAddress
        )
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <>
      <input
        placeholder="Search..."
        ref={searchInputRef}
        onChange={HandleInputChange}
      />
      <ul>
        <li onClick={HandleOnPressItem}></li>
      </ul>
    </>
  );
}
