import React, { Component } from 'react';
import { connect } from 'react-redux';
import NotificationItem from './NotificationItem';
import { fetchNotifications } from '../actions/notificationActionCreators'; // Ensure this is imported

class Notifications extends Component {
  componentDidMount() {
    this.props.fetchNotifications(); // Call fetchNotifications when the component mounts
  }

  render() {
    const { listNotifications, displayDrawer, handleDisplayDrawer, handleHideDrawer } = this.props;
    return (
      <>
        <div>
          <p onClick={handleDisplayDrawer}>Your notifications</p>
        </div>
        {displayDrawer && (
          <div>
            <button onClick={handleHideDrawer}>Close</button>
            <ul>
              {listNotifications.length === 0 && <p>No notification available yet</p>}
              {listNotifications.map((notification) => (
                <NotificationItem
                  key={notification.id}
                  type={notification.type}
                  value={notification.value}
                  html={notification.html}
                  id={notification.id}
                />
              ))}
            </ul>
          </div>
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  listNotifications: state.notifications.get('notifications').valueSeq().toArray(),
  displayDrawer: state.ui.get('isDrawerVisible'),
});

const mapDispatchToProps = {
  fetchNotifications,
  handleDisplayDrawer: () => ({ type: 'DISPLAY_DRAWER' }),
  handleHideDrawer: () => ({ type: 'HIDE_DRAWER' }),
};

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);

