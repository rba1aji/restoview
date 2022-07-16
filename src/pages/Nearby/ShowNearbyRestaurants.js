import React, { useState, useRef } from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { Pagination } from 'react-bootstrap';
import { AppState } from '../../reducers/AppContext';
import {Link} from 'react-router-dom';

function scrollToRef(ref) {
  window.scrollTo(0, ref.current.offsetTop);
}

export default function ShowNearbyRestaurants(props) {
  const { setLoading } = AppState();
  const [currpage, setCurrpage] = useState(1);
  let PaginationItems = [];
  const paginationScrollRef = useRef();

  PaginationItems.push(
    <Button
      variant="outline-secondary"
      size="md"
      style={{ margin: 0.5 }}
      type="submit"
      onClick={() => setCurrpage(currpage === 1 ? currpage : currpage - 1)}
    >
      {'<'}
    </Button>
  );
  for (let pgno = 1; pgno <= props.nearbyList.length / 10; pgno++) {
    PaginationItems.push(
      <Button
        key={pgno}
        active={pgno === currpage}
        onClick={() => setCurrpage(pgno)}
        className=""
        variant="outline-secondary"
        size="sm"
        style={{ margin: 0.5 }}
      >
        {pgno}
      </Button>
    );
  }
  PaginationItems.push(
    <Button
      type="submit"
      variant="outline-secondary"
      size="md"
      style={{ margin: 0.5 }}
      onClick={() =>
        setCurrpage(
          currpage === (props.nearbyList.length / 10).toFixed
            ? currpage
            : currpage + 1
        )
      }
    >
      {'>'}
    </Button>
  );

  return (
    <>
      <h1 ref={paginationScrollRef} style={{ opacity: props.place ? 1 : 0 }}>
        {props.place} Nearby Restaurants
      </h1>
      <div className="m-4">
        <Row xs={1} md={2} className="g-4">
          {props.nearbyList
            .slice((currpage - 1) * 10, (currpage - 1) * 10 + 10)
            .map((item, index) => {
              return (
                <Col>
                  <Card as={Link}>
                    <Card.Img variant="top" src="" />
                    <Card.Body>
                      <Card.Title>
                        <h2 className="m-0 p-0">{item.name}</h2>
                      </Card.Title>
                      <Card.Text className="m-0" style={{ fontSize: 12 }}>
                        {item.address}
                      </Card.Text>
                      {item.tags.map((tag) => {
                        return (
                          <button
                            disabled
                            className="pt-0 pb-0 border-0 mt-0"
                            style={{ fontSize: 12 }}
                          >
                            {tag}
                          </button>
                        );
                      })}
                      <Card.Text className="">Rating: ⭐⭐⭐⭐</Card.Text>
                      <Row>
                        <Col>
                          {item.phone && (
                            <Button
                              variant="secondary"
                              className="pt-0 pb-0 ps-4 pe-4"
                              as="a"
                              href={`tel:${item.phone}`}
                            >
                              Call
                            </Button>
                          )}
                        </Col>
                        <Col>
                          <Button
                            style={{ float: 'right' }}
                            variant="secondary"
                            className="pt-0 pb-0 ps-3 pe-3"
                            as="a"
                            href={`https://www.swiggy.com/search?query=${item.name.replaceAll(
                              ' ',
                              '+'
                            )}`}
                            target="_blank"
                          >
                            Order online
                          </Button>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
        </Row>
      </div>
      <div>
        {
          <Pagination
            className="justify-content-center"
            style={{
              marginTop: '10vh',
              marginBottom: '10vh',
              opacity: props.nearbyList.length > 0 ? 1 : 0,
            }}
            onClick={() => {
              setLoading(true);
              scrollToRef(paginationScrollRef);
              setLoading(false);
            }}
            onClick={() => scrollToRef(paginationScrollRef)}
          >
            {PaginationItems}
          </Pagination>
        }
      </div>
    </>
  );
}
