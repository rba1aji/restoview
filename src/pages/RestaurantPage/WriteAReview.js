import { Button, Modal, Table, FloatingLabel, Form } from 'react-bootstrap';
import React, {
  useState,
  useEffect,
  useMemo,
  useCallback,
  useRef,
} from 'react';
import { Rating } from 'react-simple-star-rating';
import { AppState } from '../../reducers/AppContext';
import { useNavigate, Link } from 'react-router-dom';
import UpdateRatingInCloud from './UpdateRatingInCloud';

function WriteAReviewModal(props) {
  const { user, setAlert } = AppState();
  const [rate, setRate] = useState(0);
  const [overAll, setOverAll] = useState(0);
  const [rates, setRates] = useState({
    overall: 0,
    food: 0,
    service: 0,
    ambience: 0,
    valueForMoney: 0,
  });
  const reviewRef = useRef('');

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

  function handleSubmit(event) {
    event.preventDefault();
    const cloudProps = {
      id: props.id,
      uId: user.id,
      ratings: rates,
      review: reviewRef.current.value,
      onHide: props.onHide,
    };
    UpdateRatingInCloud(cloudProps);
    // props.onHide();
    // setAlert({
    //   show: true,
    //   variant: 'success',
    //   msg: 'Thank you for the Review',
    // });
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
        <Form onSubmit={handleSubmit}>
          <p className="text-center">Add your ratings</p>
          <Table style={{ width: '100%', overflowY: 'auto' }}>
            <tbody>
              {props?.ratings?.types &&
                Object.keys(props.ratings.types)?.map(function (type, index) {
                  return type !== 'overall' ? (
                    <tr>
                      <td className="border border-dark p-3">{type}</td>
                      <td className="border border-dark">
                        <Rating
                          ratingValue={rate}
                          onClick={(rate) => {
                            rates[type] = rate;
                            var ov = 0;
                            Object.keys(rates).map((type) => {
                              if (type != 'overall') ov += rates[type];
                            });
                            ov = ov / 4;
                            rates['overall'] = ov;
                            setOverAll(rates['overall']);
                            // console.log(rates);
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
                <td className="border border-dark p-3">overall</td>
                <td className="border border-dark">
                  <Rating
                    readonly
                    // ratingValue={rates['overall']}
                    ratingValue={overAll}
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
            </tbody>
          </Table>
          <FloatingLabel controlId="floatingTextarea2" label="Add your review">
            <Form.Control
              ref={reviewRef}
              className="border-5 border-dark"
              as="textarea"
              placeholder="Leave a comment here"
              style={{ height: '100px', marginBottom: '20px' }}
              required
            />
          </FloatingLabel>
          <div className="text-center ">
            <Button variant="dark" style={{ width: '100%' }} type="submit">
              Submit
            </Button>
          </div>
        </Form>
      </Modal.Body>
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
        id={props.id}
        ratings={props?.ratings}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}
