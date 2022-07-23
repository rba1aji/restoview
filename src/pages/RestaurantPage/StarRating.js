import React from 'react';
import { Rating } from 'react-simple-star-rating';

export default function StarRating(props) {
  return (
    <span>
      <Rating
        ratingValue={props?.ratings?.star*100/5}
        readonly="true"
        size="25px"
      />
      ({props?.ratings?.star.toFixed(1)}
      /5)
    </span>
  );
}
