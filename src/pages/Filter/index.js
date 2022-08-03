import {
  Button,
  Table,
  DropdownButton,
  FloatingLabel,
  Form,
  ButtonGroup,
} from 'react-bootstrap';
import React from 'react';

export default function Filter() {
  return (
    <>
      <h1>Filter</h1>
      <p className="text-center opacity-75">Find the restaurant you want</p>
      <Table bordered>
        <tbody>
          <tr>
            <td style={{ width: '50%' }}>
              <DropdownButton
                title="State"
                variant="outline-dark"
                style={{ width: '100%' }}
                as={ButtonGroup}
                className="bg-white"
              ></DropdownButton>
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
