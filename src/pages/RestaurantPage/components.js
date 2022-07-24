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
    <div
    style={{
      marginLeft: '5vw',
      marginRight: '5vw',}}>
      <h5
        className="font1"
      >
        Reviews
      </h5>

      {props.reviews?.length===0&& <p>{`There aren't enough reviews for ${props.hotelName}, India yet. Be one of the first to write a review!`}</p>}

      {props?.reviews?.map((review) => {
        return (
          <Card
            style={{
              // border:0
              padding:5,
            }}
          >
            <Card.Title className='m-0 font-weight-normal'>{review.name}</Card.Title>
            <Card.Text className='ps-3'>{review.val}</Card.Text>
          </Card>
        );
      })}
      <br/><br/><br/>
    </div>
  );
}
