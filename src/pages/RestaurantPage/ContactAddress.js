import { Card } from 'react-bootstrap';
import React from 'react';

export default function ContactAddress(props) {
  return (
    <>
    {/* <hr/> */}
    <Card className="border mt-4 p-4">
      {props?.phone ? (
        <Card.Text>
          <a href={`tel:${props?.phone}`} className='text-decoration-none'>
          📞 : {props.phone}
          </a><br/>
          {`Make a Call for food availability,
          price and delivery detais.`}
        </Card.Text>
      ) : (
        <Card.Text>Contact information not available.</Card.Text>
      )}
    </Card>
    </>
  );
}
