import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';

export default function Search() {
  const inputRef = useRef();
  const [options, setOptions] = useState([]);
  const KEY = `O1W6gyHOMcvAfFFPGxQOGR2mBzWUAH2P`;
  let URL = undefined;

  function HandleInputChange(e) {
    e.preventDefault();
    console.log(inputRef.current.value);
    URL = `https://api.tomtom.com/search/2/search/${encodeURIComponent(inputRef.current.value)}.json?categorySet=7315&key=${KEY}`;
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
        ref={inputRef}
        onChange={HandleInputChange}
      />
    </>
  );
}
