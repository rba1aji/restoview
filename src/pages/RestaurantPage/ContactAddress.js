import { Card } from 'react-bootstrap';
import React from 'react';

export default function ContactAddress(props) {
  return (
    <Card className="border-0 mt-4 ms-4">
      {props?.phone ? (
        <Card.Text>
          <a href={`tel:${props?.phone}`}>Make a Call</a>
          {` for food availability,
          price and delivery detais.`}
        </Card.Text>
      ) : (
        <Card.Text>Contact information not available.</Card.Text>
      )}
    </Card>
  );
}
