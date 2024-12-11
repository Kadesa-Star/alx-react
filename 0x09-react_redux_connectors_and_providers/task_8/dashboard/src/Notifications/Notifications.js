import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { markAsRead, setNotificationFilter } from '../actions/notificationActionCreators';
import { getUnreadNotificationsByType } from '../selectors/notificationSelector';

class Notifications extends Component {
  componentDidMount() {
    this.props.fetchNotifications(); // Fetch notifications when the component mounts
  }

  render() {
    const {
      unreadNotifications,
      displayDrawer,
      handleDisplayDrawer,
      handleHideDrawer,
      markAsRead,
      setFilter,
    } = this.props;

    return (
      <>
        <div>
          <p onClick={handleDisplayDrawer}>Your notifications</p>
        </div>
        {displayDrawer && (
          <div>
            <button onClick={handleHideDrawer}>Close</button>
            <p>Here is the list of notifications:</p>
            <button onClick={() => setFilter('urgent')} className="filter-btn">
              ‼️
            </button>
            <button onClick={() => setFilter('default')} className="filter-btn">
              💠
            </button>
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

Notifications.propTypes = {
  unreadNotifications: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ),
  displayDrawer: PropTypes.bool.isRequired,
  fetchNotifications: PropTypes.func.isRequired,
  handleDisplayDrawer: PropTypes.func.isRequired,
  handleHideDrawer: PropTypes.func.isRequired,
  markAsRead: PropTypes.func.isRequired,
  setFilter: PropTypes.func.isRequired,
};

Notifications.defaultProps = {
  unreadNotifications: [],
};

const mapStateToProps = (state) => ({
  unreadNotifications: getUnreadNotificationsByType(state), // Updated to use the new selector
  displayDrawer: state.ui.get('isDrawerVisible'),
});

const mapDispatchToProps = {
  fetchNotifications, // Ensure this action is passed to fetch notifications
  handleDisplayDrawer: () => ({ type: 'DISPLAY_DRAWER' }),
  handleHideDrawer: () => ({ type: 'HIDE_DRAWER' }),
  markAsRead, // Map the markAsRead action
  setFilter: (filter) => setNotificationFilter(filter), // Map the filter action
};

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);

