
import './App.css';

import {Routes, Route, Navigate, BrowserRouter} from 'react-router-dom';
import React from 'react';
import SecondView from "./views/SecondView";




function App() {

  return (
          <div>
              <Routes>
                  {/*<Route path="/view" element={ <SecondView /> } />*/}
              </Routes>
              <SecondView/>

          </div>
  );
}

export default App;
/**
 * The project was built assuming it is hosted at /.
 * You can control this with the homepage field in your package.json.
 *
 * The build folder is ready to be deployed.
 * You may serve it with a static server:
 *
 *   npm install -g serve
 *   serve -s build
 *
 * Find out more about deployment here:
 */
/**
server {
    listen 81 default_server;

    location / {
       root /var/www/html/react/;
       index index.html index.htm;
    }
}

server {
    listen 81;
    server_name app1.localhost;

    location / {
        proxy_pass http://192.168.0.204:3154;
    }
}
 */
