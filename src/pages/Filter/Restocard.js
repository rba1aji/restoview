import { Rating } from 'react-simple-star-rating';
import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import StarRating from '../../components/StarRating';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BsTelephone } from 'react-icons/bs';

export default function RestoCard(props) {
  return (
    <Card className="bg-white" key={props.id}>
      <Card.Img variant="top" src="" />
      <Card.Body>
        <Link
          className="text-reset text-decoration-none"
          to={`/restaurant/${props?.id}`}
        >
          <Card.Title>
            <h2 className="m-0 p-0">{props?.data?.name}</h2>
          </Card.Title>
          <Card.Text className="mb-2" style={{ fontSize: 12 }}>
            {props?.data?.address.full}
          </Card.Text>
          {/* {props?.item?.tags?.map((tag, index) => {
            return (
              <button
                key={index}
                disabled
                className="pt-0 pb-0 border-0 mt-0"
                style={{ fontSize: 12 }}
              >
                {tag}
              </button>
            );
          })} */}
        </Link>

        <Card.Text className="mb-3">
          {/* Rating:  */}
          {/* <Rating resto={props.item} />{' '} */}

          <Row>
            <Col>
              <Rating
                ratingValue={(props?.data?.ratings?.star / 5) * 100}
                readonly="true"
                size="23px"
              />
            </Col>
            <Col>
              <span className="text-right" style={{ opacity: '70%' }}>
                views: {props?.data?.views}
              </span>
            </Col>
          </Row>
          {/* // */}
        </Card.Text>
        <Row>
          <Col>
            {props?.data?.phone && (
              <Button
                size="sm"
                variant="secondary"
                as="a"
                href={`tel:${props?.data?.phone}`}
              >
                <BsTelephone /> Call
              </Button>
            )}
          </Col>
          {/* <Col>
            <Button
              size="sm"
              variant="secondary"
              as="a"
              href={`https://www.swiggy.com/search?query=${props?.data?.name.replaceAll(
                ' ',
                '+'
              )}`}
              target="_blank"
            >
              Order <AiOutlineShoppingCart size="18" />
            </Button>
          </Col> */}
          <Col>
            <Button
              size="sm"
              variant="secondary"
              as={Link}
              to={`/restaurant/${props?.id}`}
            >
              Explore{'🍴'}
            </Button>
          </Col>
          <Col></Col>
        </Row>
      </Card.Body>
    </Card>
  );
}
