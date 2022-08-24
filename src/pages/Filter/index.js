import {
  Button,
  Table,
  DropdownButton,
  FloatingLabel,
  Form,
  ButtonGroup,
  Dropdown,
  Row,
  Col,
  Card,
  // CustomToggle,
  // CustomMenu,
} from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import { CustomToggle, CustomMenu } from './customCmp';
import { states } from '../../reducers/constants';
import {
  collection,
  query,
  where,
  getDocs,
  orderBy,
  limit,
} from 'firebase/firestore';
import { db, storage } from '../../configs/firebaseConfig';
import Restocard from './Restocard';

export default function Filter() {
  const [state, setState] = useState('');
  // console.log(process.env.REACT_APP_TOMTOM_API_KEY);
  const [stars, setStars] = useState({
    '5-4': false,
    '4-3': false,
    '3-2': false,
    '2-1': false,
    '1-0': false,
  });
  const [sortby, setSortby] = useState('');
  const [area, setArea] = useState('');
  const sortbyOptions = ['Rating', 'Views'];
  const [selectedStars, setSelectedStars] = useState([]);
  const [result, setResult] = useState();

  const collectionRef = collection(db, 'restaurants');

  return (
    <div style={{ minHeight: '100vh' }}>
      <h1>Filter</h1>
      <p className="text-center opacity-75">Find the restaurant you want</p>

      <Form
        onSubmit={(e) => {
          // setResult([]);
          e.preventDefault();

          const q = query(
            collectionRef,
            orderBy(`ratings.${sortby === 'Views' ? 'views' : 'star'}`, 'desc')
          );

          getDocs(q)
            .then((res) => {
              setResult(res.docs);
              // console.log(result.length);
            })
            .catch((err) => {
              console.log(err.message);
            });
        }}
        style={{
          marginLeft: window.innerWidth < 600 ? '0' : '10vw',
          marginRight: window.innerWidth < 600 ? '0' : '10vw',
        }}
      >
        <Table
          // bordered
          className="p-4 bg-white"
        >
          <tbody>
            <tr>
              <td
                style={{
                  borderWidth: '20px ',
                  borderColor: 'hsl(0, 100%, 96%)',
                  width: '50%',
                }}
              >
                <Dropdown>
                  <Dropdown.Toggle
                    as={CustomToggle}
                    id="dropdown-custom-components"
                  >
                    State
                  </Dropdown.Toggle>
                  <Dropdown.Menu as={CustomMenu}>
                    {states.map((item, index) => {
                      return (
                        <Dropdown.Item
                          key={index}
                          onClick={() => {
                            setState(item);
                          }}
                        >
                          {item}
                        </Dropdown.Item>
                      );
                    })}
                  </Dropdown.Menu>
                </Dropdown>
                <p className="mb-0 mt-2 text-center">{state}</p>
              </td>
              <td
                style={{
                  borderWidth: '20px ',
                  borderColor: 'hsl(0, 100%, 96%)',
                }}
              >
                <DropdownButton
                  title="Stars "
                  variant="light"
                  style={{ width: '100%' }}
                  as={ButtonGroup}
                >
                  {Object.keys(stars)?.map((item, index) => {
                    return (
                      <Dropdown.Item
                        key={index}
                        onClick={() => {
                          setStars((old) => {
                            var neW = old;
                            neW[item] = !neW[item];
                            // console.log(neW);
                            return neW;
                          });

                          // console.log(stars,selectedStars);

                          setSelectedStars((old) => {
                            var str = '';
                            Object.keys(stars).map((i) => {
                              if (stars[i]) str += '  ' + i + '  ';
                            });
                            return str;
                          });
                        }}
                      >
                        <input
                          key={item}
                          type="checkbox"
                          onChange={() => {}}
                          checked={stars[item]}
                        />{' '}
                        {item}
                      </Dropdown.Item>
                    );
                  })}
                </DropdownButton>

                <p className="mb-0 mt-2 text-center">{selectedStars}</p>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  borderWidth: '20px ',
                  borderColor: 'hsl(0, 100%, 96%)',
                }}
              >
                <DropdownButton
                  title="Sort by "
                  variant="light"
                  style={{ width: '100%' }}
                  as={ButtonGroup}
                >
                  {sortbyOptions.map((item, index) => {
                    return (
                      <Dropdown.Item
                        key={index}
                        onClick={() => setSortby(item)}
                      >
                        {item}
                      </Dropdown.Item>
                    );
                  })}
                </DropdownButton>
                <p className="mb-0 mt-2 text-center">{sortby}</p>
              </td>
              <td
                className="py-2 ps-3 pe-0"
                style={{
                  borderWidth: '20px ',
                  borderColor: 'hsl(0, 100%, 96%)',
                }}
              >
                <Form.Control
                  style={{ width: '90%' }}
                  onChange={(e) => {
                    setArea(e.target.value);
                  }}
                  className="p-2"
                  className="border border-dark"
                  type="text"
                  placeholder="Location"
                  size="md"
                />
              </td>
            </tr>
          </tbody>
        </Table>
        <div className="text-center">
          <Button type="submit" variant="dark" className="px-5">
            Submit
          </Button>
        </div>
      </Form>
      <br />
      <div style={{ marginLeft: '6.vw', marginRight: '6.5vw' }} className="my-4">
        <Row xs={1} md={2} className="g-4">
          {result?.map((item, index) => {
            const address = item.data().address;
            const starrate = item.data().ratings.star;
            if (address.state.includes(state) && address.full.includes(area)) {
              //lowercase make
              for (const star in stars) {
                // console.log(starrate)
                if (
                  stars[star] &&
                  starrate <= parseInt(star[0]) &&
                  starrate >= parseInt(star[2])
                ) {
                  // console.log(stars, parseInt(star[0]), parseInt(star[2]));
                  // console.log(item.data())

                  return (
                    <Col>
                      {/* <Card>{item.data().name}</Card> */}
                      <Restocard id={item.id} data={item.data()} />
                    </Col>
                  );
                }
              }
            }
          })}
        </Row>
      </div>
    </div>
  );
}
