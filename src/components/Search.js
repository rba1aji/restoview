import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';

import { Dropdown, FormControl, InputGroup } from 'react-bootstrap';
import { BsShop, BsSearch } from 'react-icons/bs';
import { FaSearchLocation } from 'react-icons/fa';
import { MdSavedSearch } from 'react-icons/md';

import SuggestionListItem from './SuggestionListItem';

export default function Search() {
  // console.log(process.env);

  const searchInputRef = useRef('');
  const [options, setOptions] = useState([]);
  const [selected, setSelected] = useState();
  const KEY = `O1W6gyHOMcvAfFFPGxQOGR2mBzWUAH2P`;

  function HandleInputChange(e) {
    e.preventDefault();

    const query = searchInputRef.current.value;

    const URL = `https://api.tomtom.com/search/2/search/${
      encodeURIComponent(query)
    }.json?categorySet=7315&countrySet=IN&key=${
      // process.env.REACT_APP_TOMTOM_API_KEY
      KEY
    }`;

    axios
      .get(URL)
      .then((res) => {
        // console.log(res)
        setOptions(res.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function SelectedRestaurant() {
    const placeByIdUrl = `https://api.tomtom.com/search/2/place.json?entityId=${encodeURIComponent(selected)}&key=${KEY}&view=IN`;
    axios
      .get(placeByIdUrl)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    return <p>{selected}</p>;
  }

  function ShowSuggestions() {
    function clearSearchBar() {
      searchInputRef.current.value = '';
      setOptions();
    }
    return (
      <ul className="list-unstyled p-4 border border-prime">
        {options.map((option, index) => {
          return (
            <span
              onClick={(e) => {
                clearSearchBar();
                setSelected(option.id);
              }}
            >
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
