import React, { useState } from 'react';

export default function StarRating(props) {
  const [stars, setStars] = useState();
  for (let i = 0; i < 3; i++) {
    // setStars(stars + 'd');
  }
  return <div>{stars}</div>;
}
