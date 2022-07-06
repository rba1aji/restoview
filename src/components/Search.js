import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';

import { Dropdown, FormControl, InputGroup } from 'react-bootstrap';
import { BsShop, BsSearch } from 'react-icons/bs';
import { FaSearchLocation } from 'react-icons/fa';
import { MdSavedSearch } from 'react-icons/md';

import SuggestionListItem from './SuggestionListItem';

export default function Search() {
  // console.log(process.env);
  // useEffect(() => {
  //   alert(process.env.REACT_APP_TOMTOM_API_KEY);
  // }, []);

  const searchInputRef = useRef('');
  const [options, setOptions] = useState([]);
  const [selected, setSelected] = useState(false);
  const KEY = `O1W6gyHOMcvAfFFPGxQOGR2mBzWUAH2P`;
  let URL = undefined;

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

  function SelectedRestaurant(props) {
    return <p>props.val</p>;
  }

  function ShowSuggestions() {
    function HandleOnClickSuggestion(e) {
      searchInputRef.current.value = '';
      setOptions();
      setSelected(true);
    }
    return (
      <ul className="list-unstyled p-4 border border-prime">
        {options.map((option, index) => {
          return (
            <span onClick={HandleOnClickSuggestion} value={option.poi.name}>
              <SuggestionListItem
                restaurantName={option.poi.name}
                restaurantAddress={option.address.freeformAddress}
              />
            </span>
          );
        })}
      </ul>
    );
  }

  return (
    <>
      <div style={{ margin: '6vw' }} className="">
        <p> Search for a Restaurant</p>
        <InputGroup className="">
          <InputGroup.Text id="basic-addon1" className="bg-light">
            <BsSearch size="20" />
          </InputGroup.Text>
          <FormControl
            // autoFocus
            size="lg"
            className=""
            placeholder="Search..."
            ref={searchInputRef}
            onChange={HandleInputChange}
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
        {/* <br /> */}
        {searchInputRef.current.value && <ShowSuggestions />}
      </div>
      {selected && <SelectedRestaurant />}
    </>
  );
}
