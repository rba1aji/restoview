import React from 'react';
import {Link } from 'react-router-dom';
export default function SuggestionListItem(props) {
  return (
    <li key={props.id} >
      <h3 className="mb-0">
        {/* <BsShop/>{' '} */}
        {props.restaurantName}
      </h3>
      <p>{props.restaurantAddress}</p>
    </li>
  );
}
