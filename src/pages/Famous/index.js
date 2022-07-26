import React, { useState } from 'react';
import { Nav, DropdownButton, Dropdown, ButtonGroup } from 'react-bootstrap';
import TopRated from './TopRated';
import MostViewed from './MostViewed';
import { StateDropdown } from 'react-india-state-region-selector';

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
  console.log(states.length);
  const [state, setState] = useState('India');

  return (
    <>
      <h1>Famous Restaurants</h1>
      
        <DropdownButton
          id="dropdown-basic-button"
          title={state}
          variant="outline-dark"
          as={ButtonGroup}
          style={{
            marginLeft:'20%',
            marginRight:'20%',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          {states.map((state) => {
            return (
              <Dropdown.Item onClick={() => setState(state)} className="">
                {state}
              </Dropdown.Item>
            );
          })}
        </DropdownButton>
      <div
        style={{ marginLeft: '7vw', marginRight: '7vw', marginTop: '5vh' }}
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

        {famousType == 0 ? <TopRated /> : <MostViewed />}
      </div>
    </>
  );
}
