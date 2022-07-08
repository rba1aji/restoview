import React, { useRef, useState, useEffect } from 'react';
import { FormControl, Button, Form } from 'react-bootstrap';
import axios from 'axios';
import { TbCurrentLocation } from 'react-icons/tb';
import API_KEY from '../../components/GetAPIKey';
import Loader from '../../components/Loader';
import ShowNearbyRestaurants from './ShowNearbyRestaurants';

function scrollToRef(ref) {
  window.scrollTo(0, ref.current.offsetTop);
}

export default function Nearby() {
  const currLocationRef = useRef('');
  const contentRef = useRef();
  const [suggestionCityList, setsuggestionCityList] = useState([]);
  const [latLon, setLatLon] = useState('');
  const [selectedPlace, setSelectedPlace] = useState('');
  const [loading, setLoading] = useState(false);
  const [nearbyList, setNearbyList] = useState([]);

  const nearbyUrl = `https://api.tomtom.com/search/2/nearbySearch/.json?key=${API_KEY}&${latLon}&countrySet=IN&categorySet=7315&view=IN&limit=100`;

  //////////////////  LATLON 2 RESULT    //////////////////
  function MakeNearbyList(arr) {
    setNearbyList([]);
    arr.map((item) => {
      const details = {
        id: item.id,
        name: item.poi.name,
        address: item.address.freeformAddress,
        phone: item.poi.phone,
        tags: item.poi.categories,
        openingHours: item.openingHours,
      };
      setNearbyList((old) => {
        return [...old, details];
      });
    });
    // console.log(nearbyList);
    scrollToRef(contentRef);
    setLoading(false);
  }

  //////////// WHEN LAT LON CHANGE ///////////
  // if(selectedPlace) {
  useEffect(() => {
    axios
      .get(nearbyUrl)
      .then((res) => {
        MakeNearbyList(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [nearbyUrl]);
  // }

  ////////////// HANDLE SELECTED //////////////
  function HandleSelected(geoNameId) {
    currLocationRef.current.value = '';
    setsuggestionCityList();
    setNearbyList([]);
    setLoading(true);
    const latLonUrl = `https://api.teleport.org/api/cities/geonameid%3A${geoNameId}`;
    axios
      .get(latLonUrl)
      .then((res) => {
        setSelectedPlace(res.data.full_name.split(',')[0]);
        setLatLon(
          `lat=${res.data.location.latlon.latitude}&lon=${res.data.location.latlon.longitude}`
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }

  ////////// SHOW SUGGESTION ///////////////
  function ShowCitySuggestion() {
    return (
      <ul className="list-unstyled p-4 pb-2 pt-2 border border-prime">
        {suggestionCityList.map((item) => {
          const name = item.matching_full_name;
          if (name.includes('India')) {
            let geoNameId = item['_links']['city:item']['href'].split('/');
            geoNameId = geoNameId[geoNameId.length - 2];
            geoNameId = geoNameId.split(':')[1];
            return (
              <li className="mb-2" onClick={() => HandleSelected(geoNameId)}>
                {name.split(',')[0]}
              </li>
            );
          }
        })}
      </ul>
    );
  }

  ///////////// DETECT LOCATION ////////////
  function AutoLocationDetect() {
    const URL = `https://api.tomtom.com/search/2/nearbySearch/.json?key=${API_KEY}&lat=${lat}&lon=${lon}&countrySet=IN&categoryset=7315&view=IN`;
  }

  function ManualLocationDetect(query) {
    const suggestionCityListUrl = `https://api.teleport.org/api/cities/?search=${query}&limit=25`;

    axios
      .get(suggestionCityListUrl)
      .then((res) => {
        setsuggestionCityList(res.data._embedded['city:search-results']);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
      <Loader flag={loading} />
      <div
        className=""
        style={{
          display: 'grid',
          marginTop: '10vh',
          marginLeft: '20vw',
          marginRight: '20vw',
          marginBottom: '20vh',
        }}
      >
        <Button
          // variant="outline-dark"
          variant="dark"
          size="md"
          className="ms-1 me-1 p-2"
          style={{ wordSpacing: 3 }}
        >
          Use Current L
          <span className="pb-5">{<TbCurrentLocation size="15" />}</span>cation
        </Button>
        <p className="text-center m-2">or</p>
        <Form.Group>
          <p className="mb-1 text-center">Enter location manually</p>
          <Form.Control
            className="border-dark p-2"
            type="text"
            placeholder="your location..?"
            ref={currLocationRef}
            onChange={(e) => {
              e.preventDefault();
              ManualLocationDetect(currLocationRef.current.value);
            }}
          />
          {currLocationRef.current.value && <ShowCitySuggestion />}
        </Form.Group>
      </div>

      <div>
        <div
          style={{
            position: 'fixed',
            display: 'flex',
            marginLeft: '45vw',
            marginTop: '45vh',
          }}
        >
          <Loader />
        </div>
        <div ref={contentRef} style={{ minHeight: '100vh', paddingTop:45 }}>
          {!loading && (
            <ShowNearbyRestaurants
              place={selectedPlace}
              nearbyList={nearbyList}
            />
          )}
        </div>
      </div>
    </>
  );
}
