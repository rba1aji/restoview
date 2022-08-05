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
  const [stars, setStars] = useState(new Set());
  const [sortby, setSortby] = useState();
  const [area, setArea] = useState('');
  const sortbyOptions = ['Rating', 'Views'];
  const starsOptions = [' 5-4 ', ' 4-3 ', ' 3-2 ', ' 2-1 '];
  return (
    <>
      <h1>Filter</h1>
      <p className="text-center opacity-75">Find the restaurant you want</p>

      <Form
        // className="bg-white"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <Table
          // bordered
          className="p-4 bg-white"
        >
          <tbody>
            <tr
            >
              <td
              style={{ borderWidth: '20px ', borderColor: 'hsl(0, 100%, 96%)', width: '50%' }}>
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
              style={{ borderWidth: '20px ', borderColor: 'hsl(0, 100%, 96%)' }}
              >
                <DropdownButton
                  title="Stars "
                  variant="light"
                  style={{ width: '100%' }}
                  as={ButtonGroup}
                  // className="bg-white"
                >
                  {starsOptions.map((item, index) => {
                    return (
                      <Dropdown.Item
                        key={index}
                        onClick={() =>
                          setStars((old) => {
                            return [old, item];
                          })
                        }
                      >
                        {item}
                      </Dropdown.Item>
                    );
                  })}
                </DropdownButton>
                <p className="mb-0 mt-2 text-center">{stars}</p>{' '}
              </td>
            </tr>
            <tr
            >
              <td
              style={{ borderWidth: '20px ', borderColor: 'hsl(0, 100%, 96%)' }}
              >
                <DropdownButton
                  title="Sort by "
                  variant="light"
                  style={{ width: '100%' }}
                  as={ButtonGroup}
                  // className="bg-white"
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
              <td className="py-2 ps-3 pe-0"
              style={{ borderWidth: '20px ', borderColor: 'hsl(0, 100%, 96%)' }}
              >
                {/* <FloatingLabel
                controlId="floatingTextarea2"
                label="Area"
                className="m-0 p-0"
                style={{ padding: '0' }}
              > */}
                {/* <label>Area</label> */}
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
                {/* </FloatingLabel> */}
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
    </>
  );
}
