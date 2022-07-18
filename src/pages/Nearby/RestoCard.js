import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import StarRating from '../../components/StarRating';

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
          <Card.Text className="mb-3">
            {/* Rating:  */}
            <StarRating id={props.item.id} />{' '}
          </Card.Text>
        </Link>
        <Row>
          <Col>
            {props?.item?.phone && (
              <Button
                style={{float:'left'}}
                variant="secondary"
                className="py-0 px-auto mx-0"
                as="a"
                href={`tel:${props?.item?.phone}`}
              >
                Call{'📞'}
              </Button>
            )}
          </Col>
          <Col>
            <Button
              style={{ float: 'center' }}
              variant="secondary"
              className="py-0 px-auto mx-0"
              as="a"
              href={`https://www.swiggy.com/search?query=${props?.item?.name.replaceAll(
                ' ',
                '+'
              )}`}
              target="_blank"
            >
              Order{'🛒'}
            </Button>
          </Col>
          <Col>
            <Button
              style={{ float: 'right' }}
              variant="secondary"
              className="py-0 px-auto mx-0"
              as={Link}
              to={`/restaurant/${props?.item?.id}`}
            >
              Explore{''}
            </Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}
