import React, { useEffect, useState } from 'react';
import axios from 'axios';
import API_KEY from '../../components/GetAPIKey';
/*data: Object
results[0].
address.
freeformAddress: ""
id: "356009039102242"
poi.
categories: Array[2] //tags
0: "indian"
1: "restaurant"
name: "Vaagai Restaurant" 
openingHours
phone
*/
export default function (props) {
  const [nearbyList, setNearbyList] = useState([]);

  const nearbyUrl = `https://api.tomtom.com/search/2/nearbySearch/.json?key=${API_KEY}&${props.latlon}&countrySet=IN&categorySet=7315&view=IN&limit=10`;

  function MakeNearbyList(arr) {
    setNearbyList([]);
    arr.map((item) => {
      const details = {
        name: item.poi.name,
        address: item.address.freeformAddress,
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
        // console.log(res);
        MakeNearbyList(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [nearbyUrl]);

  return;
}
