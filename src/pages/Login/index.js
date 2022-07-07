import React from 'react';
import { Link } from 'react-router-dom';
import {Card} from 'react-bootstrap'
export default function Login() {
  return (
    <div className="text-cente">
      <h1>Login</h1>
      <Link to="/auth/register">Register here</Link>


      <div className="m-5">
      <Card>
        <Card.Img variant="top" src="" />
        <Card.Body>
          <Card.Title className="h2 mb-1">Balaji hotel</Card.Title>
          <Card.Text className="mb-2" style={{ fontSize: 12}}>1/20, Mariyamman temple street, Pillanallur, Rasipuram, Namakkal, TamilNadu.</Card.Text>
          <Card.Text>Rating: ⭐⭐⭐⭐</Card.Text>

        </Card.Body>
      </Card>
      </div>


    </div>
  );
}
