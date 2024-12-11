import React, { Component } from 'react';
import { connect } from 'react-redux';
import Notification from '../Notifications/Notification';
import { fetchNotifications } from '../../actions/notificationActionCreators'; // Make sure to import the fetchNotifications action

class App extends Component {
    componentDidMount() {
        this.props.fetchNotifications();  // Fetch notifications when the component mounts
    }

    render() {
        return (
            <div>
                <Notification
                    displayDrawer={this.props.displayDrawer}
                    listNotifications={this.props.listNotifications} // This will be provided from Redux state
                    handleDisplayDrawer={this.props.handleDisplayDrawer}
                    handleHideDrawer={this.props.handleHideDrawer}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    displayDrawer: state.ui.get('isDrawerVisible'), // Assuming this is how drawer visibility is managed in your state
    listNotifications: state.notifications.get('notifications').toArray(), // Convert Immutable to array
});

const mapDispatchToProps = {
    fetchNotifications, // Map the fetchNotifications action creator
    handleDisplayDrawer: () => ({ type: 'DISPLAY_DRAWER' }), // Example action
    handleHideDrawer: () => ({ type: 'HIDE_DRAWER' }) // Example action
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

