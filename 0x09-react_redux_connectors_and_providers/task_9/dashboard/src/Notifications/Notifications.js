// src/Notifications/Notifications.js
import React from 'react';

const Notifications = ({
  unreadNotifications,
  displayDrawer,
  handleDisplayDrawer,
  handleHideDrawer,
  markAsRead,
  setNotificationFilter,
}) => {
  return (
    <>
      <div>
        <p onClick={handleDisplayDrawer}>Your notifications</p>
      </div>
      {displayDrawer && (
        <div>
          <button onClick={handleHideDrawer}>Close</button>
          <button onClick={() => setNotificationFilter('URGENT')}>‼️</button>
          <button onClick={() => setNotificationFilter('DEFAULT')}>💠</button>
          <ul>
            {unreadNotifications.length === 0 && <p>No notification available yet</p>}
            {unreadNotifications.map((notification) => (
              <li
                key={notification.id}
                onClick={() => markAsRead(notification.id)}
              >
                {notification.value}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Notifications;

