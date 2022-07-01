import React from 'react';
import './style.css';

import routes from './routes';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import axios from 'axios'

import Header from './components/Header'

const axios = require('axios');

// Make a request for a user with a given ID
axios.get('https://maps.googleapis.com/maps/api/place/autocomplete/json?input=amoeba&location=37.76999%2C-122.44696&radius=500&types=establishment&key=AIzaSyDZyID2twnuKnR5OPRs5OdDugVnTJoqPCU')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
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
