import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';

export default function Search() {
  const searchInputRef = useRef();
  const KEY = `O1W6gyHOMcvAfFFPGxQOGR2mBzWUAH2P`;
  let URL = undefined;

  function HandleOnPressItem() {}

  function HandleInputChange(e) {
    e.preventDefault();
    console.log(searchInputRef.current.value);
    URL = `https://api.tomtom.com/search/2/search/${encodeURIComponent(
      searchInputRef.current.value
    )}.json?categorySet=7315&key=${KEY}`;
    axios
      .get(URL)
      .then((res) => {
        console.log(res);
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
        <li onClick={() => {ref.current.value="selected"}}></li>
      </ul>
    </>
  );
}
