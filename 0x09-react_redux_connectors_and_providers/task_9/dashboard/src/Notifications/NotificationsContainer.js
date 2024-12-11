// src/Notifications/NotificationsContainer.js
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Notifications from './Notifications';
import { fetchNotifications, setNotificationFilter, markAsRead } from '../actions/notificationActionCreators';
import { getUnreadNotifications } from '../selectors';

const NotificationsContainer = ({
  unreadNotifications,
  displayDrawer,
  fetchNotifications,
  setNotificationFilter,
  handleDisplayDrawer,
  handleHideDrawer,
  markAsRead,
}) => {
  useEffect(() => {
    fetchNotifications();
  }, [fetchNotifications]);

  return (
    <Notifications
      unreadNotifications={unreadNotifications}
      displayDrawer={displayDrawer}
      handleDisplayDrawer={handleDisplayDrawer}
      handleHideDrawer={handleHideDrawer}
      markAsRead={markAsRead}
      setNotificationFilter={setNotificationFilter}
    />
  );
};

const mapStateToProps = (state) => ({
  unreadNotifications: getUnreadNotifications(state),
  displayDrawer: state.ui.get('isDrawerVisible'),
});

const mapDispatchToProps = {
  fetchNotifications,
  setNotificationFilter,
  handleDisplayDrawer: () => ({ type: 'DISPLAY_DRAWER' }),
  handleHideDrawer: () => ({ type: 'HIDE_DRAWER' }),
  markAsRead,
};

export default connect(mapStateToProps, mapDispatchToProps)(NotificationsContainer);

