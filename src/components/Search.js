import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';

import { Dropdown, FormControl } from 'react-bootstrap';

export default function Search() {
  const searchInputRef = useRef();
  const [options, setOptions] = useState([]);
  const KEY = `O1W6gyHOMcvAfFFPGxQOGR2mBzWUAH2P`;
  let URL = undefined;

  function HandleOnClickItem() {
    ref.current.value = 'selected';
  }

  function HandleInputChange(e) {
    e.preventDefault();
    const query = searchInputRef.current.value;
    URL = `https://api.tomtom.com/search/2/search/${encodeURIComponent(
      query
    )}.json?categorySet=7315&countrySet=IN&key=${KEY}`;
    axios
      .get(URL)
      .then((res) => {
        // console.log(query);
        // console.log(
        //   res.data.results[0].poi.name,
        //   res.data.results[0].address.freeformAddress
        // );
        setOptions(res.data.results);
        // console.log(options);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function ShowSuggestions() {
    return (
      <ul>
        {options.map((option, index) => {
          return (
            <>
              <h3 className="mb-0" onClick={HandleOnClickItem}>
                {option.poi.name}
              </h3>
              <p>{option.address.freeformAddress}</p>
            </>
          );
        })}
      </ul>
    );
  }

  return (
    <>
      <FormControl
        // autoFocus
        className=""
        placeholder="Search..."
        ref={searchInputRef}
        onChange={HandleInputChange}
      />
      <ShowSuggestions />
    </>
  );
}
