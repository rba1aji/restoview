import { Table, DropdownButton } from 'react-bootstrap';
import React from 'react';
export default function Filter() {
  return (
    <>
      <h1>Filter</h1>
      <p className="text-center opacity-75">Find the restaurant you want</p>
      <Table bordered>
        <tbody>
          <td>
            <DropdownButton></DropdownButton>
          </td>
          </tbody>
      </Table>
    </>
  );
}
