import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';
import { Rating } from 'react-simple-star-rating';

function WriteAReviewModal(props) {
  return (
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
        <p className="m-0 text-center">Add your ratings</p>
        {props?.ratings?.types &&
          Object.keys(props.ratings.types)?.map(function (key, index) {
            return (
              <tr>
                <td>{key}</td>
                <td> {'  '} </td>
                <td>
                  <Rating allowHalfIcon="true" size="30px" />
                </td>
              </tr>
            );
          })}
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
          onClick={() => setModalShow(true)}
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
