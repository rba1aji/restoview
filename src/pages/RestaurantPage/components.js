import React from 'react';
import { Rating } from 'react-simple-star-rating';
import { Card } from 'react-bootstrap';

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
    <>
      <h5
        className="font1"
        style={{
          marginLeft: '5vw',
        }}
      >
        Reviews
      </h5>

      {props?.reviews?.map((review) => {
        return (
          <Card
            style={{
              marginLeft: '5vw',
              // border:0
              padding:5,
            }}
          >
            <Card.Title className='m-0 font-weight-100'>{review.name}</Card.Title>
            <Card.Text className='ps-3'>{review.val}</Card.Text>
          </Card>
        );
      })}
      <br/><br/><br/>
    </>
  );
}
