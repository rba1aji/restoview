import React, { useEffect, useState } from 'react';
import axios from 'axios';
import API_KEY from '../../components/GetAPIKey';

export default function (props) {
  const [nearbyList, setNearbyList] = useState([]);

  const NearbyUrl = `https://api.tomtom.com/search/2/nearbySearch/.json?key=${API_KEY}&${props.latlon}&countrySet=IN&categorySet=7315&view=IN&limit=10`;

  useEffect(() => {
    axios
      .get(NearbyUrl)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props.latlon]);

  return;
}
