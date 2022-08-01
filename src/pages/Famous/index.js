import React, { useState, useEffect } from 'react';
import { Nav, DropdownButton, Dropdown, ButtonGroup } from 'react-bootstrap';
import TopRated from './TopRated';
import MostViewed from './MostViewed';
import { StateDropdown } from 'react-india-state-region-selector';
import { db, storage } from '../../configs/firebaseConfig';
import { getStorage, ref, listAll, getDownloadURL } from 'firebase/storage';
import { AppState } from '../../reducers/AppContext';

export default function Famous() {
  const [famousType, setFamousType] = useState(0);
  const states = [
    'India',
    'Andhra Pradesh',
    'Arunachal Pradesh',
    'Assam',
    'Bihar',
    'Chandigarh',
    'Chhattisgarh',
    'Delhi',
    'Goa',
    'Gujarat',
    'Haryana',
    'Himachal Pradesh',
    'Jammu and Kashmir Pradesh',
    'Jharkhand',
    'Karnataka',
    'Kerala',
    'Madhya Pradesh',
    'Maharashtra',
    'Manipur',
    'Meghalaya',
    'Mizoram',
    'Nagaland',
    'Odisha',
    'Puducherry',
    'Punjab',
    'Rajasthan',
    'Sikkim',
    'Tamil Nadu',
    'Telangana',
    'Tripura',
    'Uttar Pradesh',
    'Uttarakhand',
  ];
  const [state, setState] = useState('India');
  const [numImg, setNumImg] = useState([]);
  const { setLoading } = AppState();

  async function fetchNumberImagesFromStorage() {
    for (let i = 0; i < 10; i++) {
      i == 0 && setLoading(true);
      await getDownloadURL(ref(storage, `Top10/${i}.jpg`))
        .then((url) => {
          setNumImg((old) => {
            return [...old, { key: i, url: url }];
          });
        })
        .catch((error) => {
          console.log(error.message);
        });
      i == 5 && setLoading(false);
    }
  }

  useEffect(() => {
    fetchNumberImagesFromStorage();
  }, []);

  return (
    <>
      <h1>Famous Restaurants</h1>

      <DropdownButton
        id="dropdown-basic-button"
        title={state}
        variant="outline-dark"
        as={ButtonGroup}
        style={{
          marginLeft: '22%',
          marginRight: '22%',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        {states.map((state, index) => {
          return (
            <Dropdown.Item
              key={index}
              onClick={() => {
                setState(state);
                setLoading(true);
              }}
              className=""
            >
              {state}
            </Dropdown.Item>
          );
        })}
      </DropdownButton>
      <br />
      <div
        style={{
          marginLeft: window.innerWidth < 600 ? '7vw' : '12vw',
          marginRight: window.innerWidth < 600 ? '7vw' : '12vw',
        }}
        // className='border-dark border'
      >
        <Nav
          fill
          variant="tabs"
          defaultActiveKey="0"
          className=" "
          onSelect={(key) => setFamousType(key)}
        >
          <Nav.Item>
            <Nav.Link className="text-reset" eventKey="0">
              Top Rated
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="text-reset" eventKey="1">
              Most Viewed
            </Nav.Link>
          </Nav.Item>
        </Nav>

        {famousType == 0 ? (
          <TopRated state={state} numImg={numImg} />
        ) : (
          <MostViewed state={state} numImg={numImg} />
        )}
      </div>
      <br />
    </>
  );
}
