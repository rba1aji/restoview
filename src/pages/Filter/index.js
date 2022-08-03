import { Table, DropdownButton, FloatingLabel, Form } from 'react-bootstrap';
import React from 'react';
export default function Filter() {
  return (
    <>
      <h1>Filter</h1>
      <p className="text-center opacity-75">Find the restaurant you want</p>
      <Table bordered>
        <tbody>
          <tr>
            <td>
              <DropdownButton
                title="State"
                variant="outline-dark"
              ></DropdownButton>
            </td>
            <td>Sort by</td>
          </tr>
          <tr>
            <td>
              <FloatingLabel controlId="floatingTextarea2" label="Area">
                <Form.Control
                  // ref={reviewRef}
                  className="border-5 border-dark"
                  as="textarea"
                  placeholder=""
                  style={{ height: '100px', marginBottom: '20px' }}
                  required
                />
              </FloatingLabel>
            </td>
            <td>Star Rating</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}
