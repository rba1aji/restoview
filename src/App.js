import React, { useEffect } from 'react';
import './style.css';

import routes from './routes';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Loader from './components/Loader';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <div style={{ height: 60 }}></div>
        <div
          style={{
            position: 'fixed',
            top:'45%',
            left:'45%',
            // height:"100vh",
            // width:"100vw"
            zIndex:1
          }}
        >
          <Loader />
        </div>
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
