import React from 'react';
import { Rating } from 'react-simple-star-rating';

export function StarRating(props) {
  // console.log('star',props?.ratings?.star)
  return (
    <span>
      <Rating
        ratingValue={(props?.ratings?.star * 100) / 5}
        readonly="true"
        size="25px"
      />
      ({props?.ratings?.star.toFixed(1)}
      /5)
    </span>
  );
}

export function ShowReviews(props) {
  return (
    <div>
      <h5
        className="font1"
        style={{
          marginLeft: '5vw',
        }}
      >
        Reviews
      </h5>
      <ul>
        {props?.reviews?.map((review) => {
          return <li>{review.val}</li>;
        })}
      </ul>
    </div>
  );
}
