import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NotificationItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  // Trigger markAsRead when the notification is clicked
  handleClick() {
    const { id, markAsRead } = this.props;
    markAsRead(id);  // Call the markAsRead function passed as a prop
  }

  render() {
    const { type, value, html } = this.props;
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
      <li data-notification-type={dataType} onClick={this.handleClick}>
        {content}
      </li>
    );
  }
}

// Prop validation
NotificationItem.propTypes = {
  id: PropTypes.number.isRequired,    // Ensure id is passed as a number
  type: PropTypes.string,
  value: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  markAsRead: PropTypes.func.isRequired,  // markAsRead should be a function
};

// Default props if some props are not provided
NotificationItem.defaultProps = {
  type: 'default',
  value: '',
  html: null,
};

export default NotificationItem;
