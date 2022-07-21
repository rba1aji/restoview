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
        <h4>Put ratings:</h4>
        <Rating/>
      </Modal.Body>
      <Modal.Footer>
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

      <WriteAReviewModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}
