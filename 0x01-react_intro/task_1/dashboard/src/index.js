// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Notifications from './Notifications'; // Import Notifications

ReactDOM.render(
  <React.StrictMode>
    <div id="root-notifications">
      <Notifications /> {/* Render Notifications here */}
    </div>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
