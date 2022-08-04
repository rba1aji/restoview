import {
  Button,
  Table,
  DropdownButton,
  FloatingLabel,
  Form,
  ButtonGroup,
  Dropdown,
  // CustomToggle,
  // CustomMenu,
} from 'react-bootstrap';
import React, { useState } from 'react';
import { CustomToggle, CustomMenu } from './customCmp';
import { states } from '../../reducers/constants';

export default function Filter() {
  const [state, setState] = useState();
  // console.log(process.env.REACT_APP_TOMTOM_API_KEY);
  const [stars, setStars] = useState([]);
  const [sortby, setSortby] = useState();
  const [area, setArea] = useState();
  const sortbyOptions = ['Rating', 'Views'];
  return (
    <>
      <h1>Filter</h1>
      <p className="text-center opacity-75">Find the restaurant you want</p>
      <Table 
      // bordered 
      className="p-4">
        <tbody>
          <tr> 
            <td style={{ width: '50%' }}>
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
              <p className="text-center">{state}</p>
            </td>
            <td>
              <DropdownButton
                title="Stars "
                variant=""
                style={{ width: '100%' }}
                as={ButtonGroup}
                // className="bg-white"
              ></DropdownButton>
            </td>
          </tr>
          <tr>
            <td>
              <DropdownButton
                title="Sort by "
                variant=""
                style={{ width: '100%' }}
                as={ButtonGroup}
                // className="bg-white"
              >
                {sortbyOptions.map((item, index) => {
                  return (
                    <Dropdown.Item key={index} onClick={() => setSortby(item)}>
                      {item}
                    </Dropdown.Item>
                  );
                })}
              </DropdownButton>
              <p className="text-center">{sortby}</p>
            </td>
            <td>
              {/* <FloatingLabel
                controlId="floatingTextarea2"
                label="Area"
                className="m-0 p-0"
                style={{ padding: '0' }}
              > */}
              {/* <label>Area</label> */}
                <Form.Control
                  // ref={reviewRef}
                  className="m-0 p-2"
                  // style={{ padding: '0' }}
                  className="border border-dark"
                  type="text"
                  placeholder="Area"
                  size="md"
                  // style={{ height: '50%' }}
                />
              {/* </FloatingLabel> */}
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}
