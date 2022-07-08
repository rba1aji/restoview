import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import API_KEY from '../../components/GetAPIKey';
import ShowNearbyRestaurants from './ShowNearbyRestaurants';
import Loader from '../../components/Loader';

function scrollToRef(ref) {
  window.scrollTo(0, ref.current.offsetTop);
}

export default function NearbyRestaurantsList(props) {
  const [nearbyList, setNearbyList] = useState([]);
  const contentRef = useRef();
  const [loading, setLoading] = useState(false);

  const nearbyUrl = `https://api.tomtom.com/search/2/nearbySearch/.json?key=${API_KEY}&${props.latlon}&countrySet=IN&categorySet=7315&view=IN&limit=100`;

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
  }

  useEffect(() => {
    setLoading(true);
    axios
      .get(nearbyUrl)
      .then((res) => {
        MakeNearbyList(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
    setLoading(false);
    if (!loading) {
      setTimeout(() => {
        scrollToRef(contentRef);
      }, 500);
    }
  }, [nearbyUrl]);

  return nearbyList;
  // <div>
  //   <div style={{position:"fixed",display:"flex", marginLeft:"45vw", marginTop:"45vh"}}><Loader /></div>
  //   <div ref={contentRef} style={{ height: 50 }}></div>
  //   <h1>{props.place} Nearby Restaurants</h1>
  //   {!loading && <ShowNearbyRestaurants nearbyList={nearbyList} />}
  // </div>
}
