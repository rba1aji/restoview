import React from 'react';
import './style.css';

import routes from './routes';

import { BrowserRouter , Route } from 'react-router-dom'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <nav>
          <ul>
            
          </ul>
        </nav>
        {
          routes.map(
            (route,index)=>(
              <router
                path={route.path}
                exact 
                render={(props)=><route.component{...props}/>}
              />
            )
          )
        }
      </BrowserRouter>
    </div>
  );
}
