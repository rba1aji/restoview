import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import StarRating from '../../components/StarRating';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BsTelephone } from 'react-icons/bs';

export default function RestoCard(props) {
  return (
    <Card className="bg-light">
      <Card.Img variant="top" src="" />
      <Card.Body>
        <Link
          className="text-reset text-decoration-none"
          to={`/restaurant/${props?.item?.id}`}
        >
          <Card.Title>
            <h2 className="m-0 p-0">{props?.item?.name}</h2>
          </Card.Title>
          <Card.Text className="m-0" style={{ fontSize: 12 }}>
            {props?.item?.address}
          </Card.Text>
          {props?.item?.tags?.map((tag, index) => {
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
          })}
        </Link>

          <Card.Text className="mb-3">
            {/* Rating:  */}
            <StarRating resto={props.item} />{' '}
          </Card.Text>
        <Row>
          <Col>
            {props?.item?.phone && (
              <Button
                size="sm"
                variant="secondary"
                as="a"
                href={`tel:${props?.item?.phone}`}
              >
                <BsTelephone />{' '}Call
              </Button>
            )}
          </Col>
          <Col>
            <Button
              size="sm"
              variant="secondary"
              as="a"
              href={`https://www.swiggy.com/search?query=${props?.item?.name.replaceAll(
                ' ',
                '+'
              )}`}
              target="_blank"
            >
              Order <AiOutlineShoppingCart size="18" />
            </Button>
          </Col>
          <Col>
            <Button
              size="sm"
              variant="secondary"
              as={Link}
              to={`/restaurant/${props?.item?.id}`}
            >
              Explore{'🍴'}
            </Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}
