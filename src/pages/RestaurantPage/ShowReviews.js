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
          <Card
            className="p-2 my-3 "
            // style={{marginLeft:'5vw', marginRight:'5vw'}}
          >
            <Card.Text
              className="m-0 p-0"
              style={{ fontWeight: '500', fontSize: '120%' }}
            >
              {review.uName}
              <span className=" pb-4" style={{ fontSize: '70%',opacity:'50%' }}>
                {' on '}
                {review.date}
              </span>
            </Card.Text>
            <span className="ps-2" style={{ fontSize: '80%' }}>
              {parseFloat(review.rate * 0.05).toFixed(1)}{' '}
              <span>
                <Rating
                  className="pb-1"
                  ratingValue="70"
                  readonly="true"
                  size="15px"
                />
              </span>
            </span>
            <Card.Text className="ps-2">{review.val}</Card.Text>
          </Card>
        );
      })}
    </div>
  );
}
