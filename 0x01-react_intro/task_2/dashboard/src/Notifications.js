// src/Notifications.js
import React from 'react';
import './Notifications.css';
import closeIcon from './close-icon.png'; // Ensure the image is in the correct path
import { getLatestNotification } from './utils';

function Notifications() {
  const handleClick = () => {
    console.log('Close button has been clicked');
  };

  return (
    <div className="Notifications">
      <p>Here is the list of notifications</p>

      {/* Button with inline styling */}
      <button
        style={{
          float: 'right',
          border: 'none',
          background: 'transparent',
          cursor: 'pointer',
        }}
        aria-label="Close"
        onClick={handleClick}
      >
        <img src={closeIcon} alt="Close icon" />
      </button>

      {/* Unordered list with notifications */}
      <ul>
        <li data-priority="default" style={{ color: 'blue' }}>
          New course available
        </li>
        <li data-priority="urgent" style={{ color: 'red' }}>
          New resume available
        </li>
        <li
          dangerouslySetInnerHTML={{
            __html: getLatestNotification(),
          }}
        />
      </ul>
    </div>
  );
}

export default Notifications;
