import React, { useState } from 'react';

export default function StarRating(props) {
  const stars = [];
  for (let i = 0; i < 4; i++) {
    stars.push(<span>⭐</span>);
  }

  return <div>{stars}</div>;
}
