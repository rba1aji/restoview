import React, { useEffect } from 'react';
import axios from 'axios';
import API_KEY from '../../components/GetAPIKey';
export default function (props) {
  const NearbyUrl = `https://api.tomtom.com/search/2/nearbySearch/.json?key=${API_KEY}&${props.latlon}&countrySet=IN&categorySet=7315&view=IN`;
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
