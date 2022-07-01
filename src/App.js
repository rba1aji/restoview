import React from 'react';
import './style.css';

import routes from './routes';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import axios from 'axios';

import Header from './components/Header';

const API_KEY='AIzaSyDZyID2twnuKnR5OPRs5OdDugVnTJoqPCU'

const axios = require('axios');

var config = {
  method: 'get',
  url: `http://maps.googleapis.com/maps/api/place/autocomplete/json?input=amoeba&key=${API_KEY}`,
  headers: { }
};

 
fetch(`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=amoeba&location=37.76999%2C-122.44696&radius=500&types=establishment&key=${API_KEY}`)
.then(
  res=>res.json();
)
.then(function (js) {
  console.log(res);
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
