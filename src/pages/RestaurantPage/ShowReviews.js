import React from 'react';
import { Card } from 'react-bootstrap';
import { Rating } from 'react-simple-star-rating';

export default function ShowReviews(props) {
  return (
    <div
      style={{
        marginLeft: '5vw',
        marginRight: '5vw',
      }}
    >
      <h4 className="font2">
        Reviews
        <span style={{ fontWeight: 'normal', fontSize: '12px' }}>
          {' '}
          ({props.reviews?.length})
        </span>
      </h4>

      {props.reviews?.length < 1 && (
        <p>{`There aren't enough reviews for ${props.hotelName}, India yet. Be one of the first to write a review!`}</p>
      )}

      {props?.reviews?.map((review) => {
        return (
          <Card className="p-2 mb-3">
            <Card.Text
              className="mb-0"
              style={{ fontWeight: '500', fontSize: '120%' }}
            >
              {review.uName}{' '}
              <span style={{ fontSize: '60%' }}>
                {review.rate}
                {/* <Rating ratingValue="70" fillColor='black' readonly="true" size="15px" /> */}
              </span>
            </Card.Text>
            <Card.Text className="ps-3">{review.val}</Card.Text>
          </Card>
        );
      })}
      <br />
      <br />
      <br />
    </div>
  );
}
