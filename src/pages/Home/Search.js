import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { Dropdown, FormControl, InputGroup } from 'react-bootstrap';
import { BsShop, BsSearch } from 'react-icons/bs';
import { FaSearchLocation } from 'react-icons/fa';
import { MdSavedSearch } from 'react-icons/md';
import API_KEY from '../../reducers/API_KEY';
import { Link } from 'react-router-dom';
import { Card, Container } from 'react-bootstrap';
export default function Search(props) {
  // console.log(process.env);

  const searchInputRef = useRef('');
  const [options, setOptions] = useState([]);

  function HandleInputChange(e) {
    e.preventDefault();

    const query = searchInputRef.current.value;

    const URL = `https://api.tomtom.com/search/2/search/${encodeURIComponent(
      query
    )}.json?categorySet=7315&countrySet=IN&key=${
      // process.env.REACT_APP_TOMTOM_API_KEY
      API_KEY
    }&limit=15`;

    axios
      .get(URL)
      .then((res) => {
        setOptions(res.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function ShowSuggestions() {
    function clearSearchBar() {
      searchInputRef.current.value = '';
      setOptions();
    }
    return (
      <ul className="bg-light list-unstyled p-4 border border-prime">
        {options.map((option, index) => {
          return (
            <Link
              className="text-reset text-decoration-none"
              key={index}
              onClick={(e) => {
                clearSearchBar();
              }}
              to={`/restaurant/${option.id}`}
            >
              <h3 className="mb-0">
                {/* <BsShop/>{' '} */}
                {option.poi.name}
              </h3>
              <p style={{ fontSize: '80%' }}>
                {option.address.freeformAddress}
              </p>
            </Link>
          );
        })}
      </ul>
    );
  }

  return (
    <>
      <div>
        {/* <p> Search for a Restaurant</p> */}
        <InputGroup>
          <InputGroup.Text
            id="basic-addon1"
            style={{ background: 'transparent' }}
            className="border-dark"
          >
            {/* <BsSearch size="20" /> */}
            <span className="h2 m-0">🍳</span>
          </InputGroup.Text>
          <FormControl
            autoFocus={props.autoFocus}
            size="lg"
            placeholder="Search for Restaurants "
            ref={searchInputRef}
            onChange={HandleInputChange}
            aria-label="Username"
            aria-describedby="basic-addon1"
            className="border-dark"
          />
        </InputGroup>
        {searchInputRef.current.value && <ShowSuggestions />}
      </div>
    </>
  );
}
