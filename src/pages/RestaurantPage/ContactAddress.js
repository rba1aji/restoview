import { Card } from 'react-bootstrap';
import React from 'react';

export default function ContactAddress(props) {
  return (
    <div className="border">
      <h4 className="font2" style={{ marginLeft: '5vw', marginTop: '5vw' }}>
        Contact {'&'} Address
      </h4>
      <Card className="border-0  p-4">
        {props?.phone ? (
          <Card.Text>
            <a href={`tel:${props?.phone}`} className="text-decoration-none">
              📞 : {props.phone}
            </a>
            <br />
            {`Make a Call for food availability,
          price and delivery details.`}
          </Card.Text>
        ) : (
          <Card.Text>Contact information not available.</Card.Text>
        )}
      </Card>

      {/* <h4 className="font2" style={{ marginLeft: '5vw', marginTop: '5vw' }}>
        Address
      </h4> */}
      <Card className="border-0 p-4">
        <Card.Text>{props.address}</Card.Text>
      </Card>
    </div>
  );
}
