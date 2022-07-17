import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import API_KEY from '../../components/GetAPIKey';
import StarRating from '../../components/StarRating';

export default function SelectedRestaurant() {
  const { id } = useParams();
  const [res, setRes] = useState();
  const placeByIdUrl = `https://api.tomtom.com/search/2/place.json?entityId=${id}&key=${API_KEY}&view=IN`;

  async function FetchResData() {
    await axios
      .get(placeByIdUrl)
      .then((r) => {
        setRes(r.data.results[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    FetchResData();
  }, []);

  return (
    <div>
      <h1>{res?.poi?.name}</h1>
      <h2>Ratings</h2>
      <StarRating id={id} />
    </div>
  );
}
