import React from 'react';
import propTypes from 'prop-types';

const NotificationItem = ({ type = 'default', value, html }) => {
    // Determine the notification type and content to render
    const dataType = type && typeof type === 'string' ? type : 'default';
    let content;

    if (html && html.__html) {
        content = <span dangerouslySetInnerHTML={html} />;
    } else if (value && typeof value === 'string') {
        content = value;
    } else {
        content = 'NotificationItem: invalid props';
    }

    return (
        <li data-notification-type={dataType}>
            {content}
        </li>
    );
};

NotificationItem.propTypes = {
    type: propTypes.string,
    value: propTypes.string,
    html: propTypes.shape({
        __html: propTypes.string,
    }),
};

export default NotificationItem;
