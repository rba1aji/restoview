import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';

import { Dropdown, FormControl } from 'react-bootstrap';
import { BsShop } from 'react-icons/bs';

export default function Search() {
  // console.log(process.env);
  // useEffect(() => {
  //   alert(process.env.REACT_APP_TOMTOM_API_KEY);
  // }, []);

  const searchInputRef = useRef();
  const [options, setOptions] = useState([]);
  const KEY = `O1W6gyHOMcvAfFFPGxQOGR2mBzWUAH2P`;
  let URL = undefined;

  function HandleOnClickItem(e) {
    searchInputRef.current.value = e.target.value;
    HandleInputChange(e);
  }

  function HandleInputChange(e) {
    e.preventDefault();
    const query = searchInputRef.current.value;
    URL = `https://api.tomtom.com/search/2/search/${encodeURIComponent(
      query
    )}.json?categorySet=7315&countrySet=IN&key=${
      // process.env.REACT_APP_TOMTOM_API_KEY
      KEY
    }`;
    axios
      .get(URL)
      .then((res) => {
        // console.log(query);
        // console.log(res)
        // console.log(res.data.results[0].id)
        // console.log(res.data.results[0].address.freeformAddress)
        setOptions(res.data.results);
        // console.log(options);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function ShowSuggestions() {
    return (
      <ul className="list-unstyled p-4 border border-prime">
        {options.map((option, index) => {
          return (
            <>
              <li as="inputarea" onClick={HandleOnClickItem} key={index}>
                <h3 className="mb-0">
                  {/* <BsShop/>{' '} */}
                  {option.poi.name}
                </h3>
                <p> {option.address.freeformAddress}</p>
              </li>
            </>
          );
        })}
      </ul>
    );
  }

  return (
    <>
      <div style={{margin:"6vw"}} className="">
        <FormControl
          // autoFocus
          size="lg"
          className=""
          placeholder="Search..."
          ref={searchInputRef}
          onChange={HandleInputChange}
        />
        {/* <br /> */}
        <ShowSuggestions />
      </div>
    </>
  );
}
