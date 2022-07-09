import React, { useState } from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { Pagination } from 'react-bootstrap';

export default function ShowNearbyRestaurants(props) {
  const [currpage, setCurrpage] = useState(1);
  let PaginationItems = [];
  PaginationItems.push(
    <Pagination.Prev
      onClick={() => setCurrpage(currpage === 1 ? currpage : currpage - 1)}
    />
  );
  for (let pgno = 1; pgno <= props.nearbyList.length / 10; pgno++) {
    PaginationItems.push(
      <>
        <Pagination.Item
          key={pgno}
          active={pgno===currpage}
          onClick={() => setCurrpage(pgno)}
        >
          {pgno}
        </Pagination.Item>
      </>
    );
  }
  PaginationItems.push(
    <Pagination.Next
      onClick={() =>
        setCurrpage(
          currpage === (props.nearbyList.length / 10).toFixed
            ? currpage
            : currpage + 1
        )
      }
    />
  );
  return (
    <>
      <h1 style={{ opacity: props.place ? 1 : 0 }}>
        {props.place} Nearby Restaurants
      </h1>
      <div className="m-4">
        <Row xs={1} md={2} className="g-4">
          {props.nearbyList
            .slice((currpage - 1) * 10, (currpage - 1) * 10 + 10)
            .map((item) => {
              return (
                <Col>
                  <Card>
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
      <div>{<Pagination

          className="justify-content-center"
      >{PaginationItems}</Pagination>}</div>
    </>
  );
}
