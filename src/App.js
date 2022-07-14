import React, { useEffect } from 'react';
import './style.css';

import routes from './reducers/routes';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Loader from './components/Loader';
import Alert from './components/Alert';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <div style={{ height: 60 }}></div>
        <Loader />
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
      <Alert />
    </div>
  );
}
