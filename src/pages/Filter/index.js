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

export default function Filter() {
  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <Button
      href=""
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
      className="bg-white"
      variant="outline-dark"
      style={{ width: '100%' }}
    >
      {children} {/* State  */}
      &#x25bc;
    </Button>
  ));

  // forwardRef again here!
  // Dropdown needs access to the DOM of the Menu to measure it
  const CustomMenu = React.forwardRef(
    ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
      const [value, setValue] = useState('');

      return (
        <div
          ref={ref}
          style={style}
          className={className}
          aria-labelledby={labeledBy}
        >
          <Form.Control
            autoFocus
            className="mx-3 my-2 w-auto"
            placeholder="Type to filter..."
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />
          <ul className="list-unstyled">
            {React.Children.toArray(children).filter(
              (child) =>
                !value || child.props.children.toLowerCase().startsWith(value)
            )}
          </ul>
        </div>
      );
    }
  );

  return (
    <>
      <h1>Filter</h1>
      <p className="text-center opacity-75">Find the restaurant you want</p>
      <br />
      <Table bordered className='filtertable'>
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
                  <Dropdown.Item>africa</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </td>
            <td>Star Rating</td>
          </tr>
          <tr>
            <td>
              <FloatingLabel
                controlId="floatingTextarea2"
                label="Area"
                className="m-0 p-0"
                style={{ padding: '0' }}
              >
                <Form.Control
                  // ref={reviewRef}
                  className="m-0 p-0"
                  style={{ padding: '0' }}
                  className="border border-dark"
                  type="text"
                  placeholder="Area"
                  style={{ height: '50%' }}
                />
              </FloatingLabel>
            </td>
            <td>
              <DropdownButton
                title="Sort by"
                variant="outline-dark"
                style={{ width: '100%' }}
                as={ButtonGroup}
                className="bg-white"
              ></DropdownButton>
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}
