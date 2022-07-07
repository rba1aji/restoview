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

  const NearbyUrl = `https://api.tomtom.com/search/2/nearbySearch/.json?key=${API_KEY}&${props.latlon}&countrySet=IN&categorySet=7315&view=IN&limit=10`;

  useEffect(() => {
    axios
      .get(NearbyUrl)
      .then((res) => {
        // console.log(res);
        res.data.results.map((item) => {
          setNearbyList((old) => {
            const details = {
              name: item.poi.name,
              address: item.address.freeformAddress,
            };
            return [...old, { details }];
          });
        });
        console.log(nearbyList);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props.latlon]);

  return;
}
