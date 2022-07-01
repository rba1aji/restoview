import React, { useEffect } from 'react';
import './style.css';

import routes from './routes';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import axios from 'axios';

import Header from './components/Header';

const GOOGLE_API_KEY = 'AIzaSyDZyID2twnuKnR5OPRs5OdDugVnTJoqPCU';

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
