import React from 'react';
import { Link } from 'react-router-dom'
export default function Register(){
  return(
    <div className="text-center">
      <h1>Register</h1>
      <Link to="/auth/login">Login here</Link>
    </div>
  );
}