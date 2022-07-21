import { Button, Modal, Table } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import { Rating } from 'react-simple-star-rating';
import { AppState } from '../../reducers/AppContext';
import { useNavigate, Link } from 'react-router-dom';

function WriteAReviewModal(props) {
  const { user } = AppState();
  const [rate, setRate] = useState(0);
  const [overallrate,setOverallrate]=useState(0);
  let rates = {
    overall: 0,
    food: 0,
    service: 0,
    ambience: 0,
    valueForMoney: 0,
  };

  if (!user && props?.show) {
    return (
      <Modal show={props.show} onHide={props.onHide} centered>
        <Modal.Header closeButton>
          <br />
          <br />
          <Link to="/auth/login" className="ms-auto">
            <Button className="me-2 py-0" variant="outline-dark">
              Login
            </Button>
          </Link>
          to continue
        </Modal.Header>
      </Modal>
    );
  }

  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" className="mb-0 pb-0">
          Write A Review
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="text-center">Add your ratings</p>
        <Table>
          {props?.ratings?.types &&
            Object.keys(props.ratings.types)?.map(function (type, index) {
              return type !== 'overall' ? (
                <tr>
                  <td className="border p-3">{type}</td>
                  <td className="border">
                    <Rating
                      ratingValue={rate}
                      onClick={(rate) => {
                        rates[type] = rate;
                        console.log(rates);
                      }}
                      key={type}
                      allowHalfIcon="true"
                      size="30px"
                      allowHover="false"
                      showTooltip="true"
                      tooltipStyle={{
                        fontSize: '10px',
                        paddingTop: 0,
                        paddingBottom: 0,
                        paddingLeft: 5,
                        paddingRight: 5,
                        margin: 4,
                      }}
                      tooltipDefaultText="0"
                    />
                  </td>
                </tr>
              ) : (
                <></>
              );
            })}

          <tr>
            <td className="border p-3">overall</td>
            <td className="border">
              <Rating
                ratingValue={overallrate}
                allowHalfIcon="true"
                size="30px"
                showTooltip="true"
                tooltipStyle={{
                  fontSize: '10px',
                  paddingTop: 0,
                  paddingBottom: 0,
                  paddingLeft: 5,
                  paddingRight: 5,
                  margin: 4,
                }}
                tooltipDefaultText="0"
              />
            </td>
          </tr>
        </Table>
      </Modal.Body>
      <Modal.Footer className="py-0">
        <Button variant="secondary" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default function WriteAReview(props) {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <div className="text-center">
        <Button
          className="outline-5"
          variant="dark"
          style={{ width: '80vw' }}
          onClick={() => {
            setModalShow(true);
          }}
        >
          Write A Review
        </Button>
      </div>

      <WriteAReviewModal
        ratings={props?.ratings}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}
