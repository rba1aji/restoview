import React, { useEffect, useState } from 'react';
import axios from 'axios';
import API_KEY from '../../components/GetAPIKey';
/*data: Object
results: Array[10]
0: Object
address: Object
freeformAddress: "18 North Cutcherry Street, Opp New Anjaneyar Temple Old Bus Stand, Rasipuram 637401, Tamil Nadu"
id: "356009039102242"
info: "search:ta:356009039102242-IN"
poi: Object
categories: Array[2] //tags
0: "indian"
1: "restaurant"
name: "Vaagai Restaurant" 

*/
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
