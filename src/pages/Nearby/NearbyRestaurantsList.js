import React, { useEffect, useState } from 'react';
import axios from 'axios';
import API_KEY from '../../components/GetAPIKey';
import ShowNearbyRestaurants from './ShowNearbyRestaurants';

export default function NearbyRestaurantsList(props) {
  const [nearbyList, setNearbyList] = useState([]);

  const nearbyUrl = `https://api.tomtom.com/search/2/nearbySearch/.json?key=${API_KEY}&${props.latlon}&countrySet=IN&categorySet=7315&view=IN&limit=10`;

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
    console.log(nearbyList);
  }

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

  return <ShowNearbyRestaurants nearbyList={nearbyList} />;
}
