import React from 'react';
import './style.css';

import routes from './routes';

import { BrowserRouter, Route, Link } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/auth/login">Login</Link>
            </li>
            <li>
              <Link to="/auth/register">Register</Link>
            </li>
          </ul>
        </nav>
        {routes.map(
          (route, index) => (
            <Route
              path={route.path}
              exact
              render={(props)=><route.component{...props}/>}
            />
          )
        )}
      </BrowserRouter>
    </div>
  );
}
