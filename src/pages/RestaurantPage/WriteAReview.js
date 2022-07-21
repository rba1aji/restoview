import { Button, Modal, Table } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import { Rating } from 'react-simple-star-rating';
import { AppState } from '../../reducers/AppContext';
import { useNavigate } from 'react-router-dom';

function WriteAReviewModal(props) {
  const { user } = AppState();
  const navigate = useNavigate();

  return !user && props.show? <p>login to continue</p>: (
    <Modal
      show={props.show}
      onHide={props.onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Write A Review
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="text-center">Add your ratings</p>
        <Table>
          {props?.ratings?.types &&
            Object.keys(props.ratings.types)?.map(function (key, index) {
              return (
                <tr>
                  <td className="border p-3">{key}</td>
                  <td className="border">
                    <Rating allowHalfIcon="true" size="30px" />
                  </td>
                </tr>
              );
            })}
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
          variant="outline-dark"
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
