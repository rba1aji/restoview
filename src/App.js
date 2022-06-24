import React from 'react';
import './style.css';

import routes from './routes';
import { BrowserRouter, Route, Link, Routes, Outlet } from 'react-router-dom';

function NavBar() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/filter">Filter</Link>
          </li>
          <li>
            <Link to="/near-by-restaurants">Nearby Restaurants</Link>
          </li>
          <li>
            <Link to="/top-rated-restaurants">Top Rated Restaurants</Link>
          </li>
          <li>
            <Link to="/auth/login">Login</Link>
          </li>
        </ul>
      </nav>
      {/* <Outlet/> */}
    </>
  );
}

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
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
