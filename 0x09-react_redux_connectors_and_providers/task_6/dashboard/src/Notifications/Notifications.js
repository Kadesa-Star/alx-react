import React, { Component } from 'react';
import { connect } from 'react-redux';
import { markAsRead } from '../actions/notificationActionCreators'; // Assuming this action exists
import { getUnreadNotifications } from '../selectors'; // Importing the selector

class Notifications extends Component {
  componentDidMount() {
    this.props.fetchNotifications(); // Fetch notifications when component is mounted
  }

  render() {
    const { unreadNotifications, displayDrawer, handleDisplayDrawer, handleHideDrawer, markAsRead } = this.props;
    return (
      <>
        <div>
          <p onClick={handleDisplayDrawer}>Your notifications</p>
        </div>
        {displayDrawer && (
          <div>
            <button onClick={handleHideDrawer}>Close</button>
            <ul>
              {unreadNotifications.length === 0 && <p>No notification available yet</p>}
              {unreadNotifications.map((notification) => (
                <li
                  key={notification.id}
                  onClick={() => markAsRead(notification.id)} // Mark as read when clicked
                >
                  {notification.value}
                </li>
              ))}
            </ul>
          </div>
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  unreadNotifications: getUnreadNotifications(state), // Use the selector to get unread notifications
  displayDrawer: state.ui.get('isDrawerVisible'),
});

const mapDispatchToProps = {
  fetchNotifications, // Ensure this action is passed to fetch notifications
  handleDisplayDrawer: () => ({ type: 'DISPLAY_DRAWER' }),
  handleHideDrawer: () => ({ type: 'HIDE_DRAWER' }),
  markAsRead, // Map the markAsRead action
};

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);

