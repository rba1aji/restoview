import React, { useState, useRef } from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { Pagination } from 'react-bootstrap';
import { AppState } from '../../reducers/AppContext';
import { Link } from 'react-router-dom';
import RestoCard from './RestoCard';

export default function ShowNearbyRestaurants(props) {
  const { setLoading } = AppState();
  const [currpage, setCurrpage] = useState(1);
  let PaginationItems = [];
  const paginationScrollRef = useRef();

  function scrollToRef(ref) {
    window.scrollTo(0, ref.current.offsetTop);
    setLoading(false);
  }

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
      <div
        style={{ marginLeft: '6vw', marginRight: '6vw' }}
        className="mt-4 mb-4"
      >
        <Row xs={1} md={2} className="g-4">
          {props?.nearbyList
            .slice((currpage - 1) * 10, (currpage - 1) * 10 + 10)
            .map((item, index) => {
              return (
                <Col key={index}>
                  <RestoCard item={item} />
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
              paddingBottom: '10vh',
              opacity: props.nearbyList.length > 0 ? 1 : 0,
            }}
            onClick={() => {
              setLoading(true);
              scrollToRef(paginationScrollRef);
              // setLoading(false);
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
