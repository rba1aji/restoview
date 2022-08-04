import React, { useState } from 'react';
import { DropdownButton, Button, Form, ButtonGroup } from 'react-bootstrap';

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <DropdownButton
    href=""
    title="State "
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
    // className="bg-white"
    variant=""
    as={ButtonGroup}
    style={{ width: '100%' }}
  >
    {/* {children}
    &#x25bc; */}
  </DropdownButton>
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

export { CustomToggle, CustomMenu };
