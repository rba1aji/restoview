import React from 'react';
export default function SuggestionListItem(props) {
  return (
    <li>
      <h3 className="mb-0">
        {/* <BsShop/>{' '} */}
        {props.restaurantName}
      </h3>
      <p>{props.restaurantAddress}</p>
    </li>
  );
}
