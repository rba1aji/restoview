import React from 'react';
import './style.css';

import routes from './routes';
import { BrowserRouter, Route, Link, Routes, Outlet } from 'react-router-dom';

import HomeComponent from './containers/Home';

export default function App() {
  return (
    <div>
      {/* <HomeComponent/> */}
      <BrowserRouter>
        {/* <nav>
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
        <Outlet/> */}
        <Routes>
          {/* <Route path="/" exact element={<HomeComponent/>}></Route> */}
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact
              element={<route.component />}
              // render={(props) => <route.component {...props} />}
            ></Route>
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
}
