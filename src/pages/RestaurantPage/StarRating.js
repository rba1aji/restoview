import React from 'react';
import { Rating } from 'react-simple-star-rating';

export default function StarRating(props) {
  // console.log('star',props?.ratings?.star)
  return (
    <span>
      <Rating
        ratingValue={(props?.ratings?.star * 100) / 5}
        readonly="true"
        size={window.innerWidth < 600 ? '25px' : '35px'}
      />{' '}
      ({props?.ratings?.star.toFixed(1)}
      /5)
    </span>
  );
}
