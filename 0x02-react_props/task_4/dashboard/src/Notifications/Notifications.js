import React from 'react';
import close_icon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';
import propTypes from 'prop-types';

import './Notifications.css';

const Notification = ({ displayDrawer }) => {
    const handleClose = () => {
        console.log('Close button has been clicked');
    };

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
                        aria-label="Close"
                        onClick={handleClose}
                    >
                        <img src={close_icon} alt="Close" height="15px" width="15px" />
                    </button>
                    <p>Here is the list of notifications:</p>
                    <ul>
                        <NotificationItem type="default" value="New course available" />
                        <NotificationItem type="urgent" value="New resume available" />
                        <NotificationItem type="urgent" html={{ __html: getLatestNotification() }} />
                    </ul>
                </div>
            )}
        </>
    );
};

Notification.defaultProps = {
    displayDrawer: false,
};

Notification.propTypes = {
    displayDrawer: propTypes.bool,
};

export default Notification;
