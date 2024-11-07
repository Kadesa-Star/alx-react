import React, { Component } from 'react';
import close_icon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';
import PropTypes from 'prop-types';

import './Notifications.css';

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  // Function to mark a notification as read
  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  // Performance optimization: Only update if the new list has more notifications
  shouldComponentUpdate(nextProps) {
    // Compare current listNotifications length with the next one
    return nextProps.listNotifications.length > this.props.listNotifications.length;
  }

  render() {
    const { displayDrawer, listNotifications } = this.props;
    return (
      <>
        <div className="menuItem">
          <p>Your notifications</p>
        </div>
        {displayDrawer && (
          <div className="Notifications">
            <button
              style={{
                position: 'absolute',
                background: 'transparent',
                border: 'none',
                right: '20px',
              }}
              aria-label="close"
              onClick={() => {
                console.log('Close button has been clicked');
              }}
            >
              <img src={close_icon} alt="close" height="15px" width="15px" />
            </button>
            <p>Here is the list of notifications</p>
            <ul>
              {listNotifications.length === 0 ? (
                <li>
                  <p>No new notification for now</p>
                </li>
              ) : (
                listNotifications.map((notification) => (
                  <NotificationItem
                    key={notification.id}
                    id={notification.id}  // Pass the id prop
                    html={notification.html}
                    type={notification.type}
                    value={notification.value}
                    markAsRead={this.markAsRead}  // Pass markAsRead function to NotificationItem
                  />
                ))
              )}
            </ul>
          </div>
        )}
      </>
    );
  }
}

// Default props for Notifications component
Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],  // Default to an empty array
};

// Prop validation for Notifications component
Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),  // Validate shape
};

export default Notifications;
