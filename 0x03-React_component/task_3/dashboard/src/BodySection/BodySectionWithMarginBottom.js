import React from 'react';
import PropTypes from 'prop-types';
import BodySection from './BodySection'; // Importing BodySection component
import './BodySectionWithMarginBottom.css'; // Import the stylesheet

class BodySectionWithMarginBottom extends React.Component {
  render() {
    return (
      <div className="bodySectionWithMargin">
        <BodySection {...this.props} />  {/* Using spread operator to pass all props */}
      </div>
    );
  }
}

BodySectionWithMarginBottom.propTypes = {
  // PropTypes for the props that BodySectionWithMarginBottom receives
  title: PropTypes.string.isRequired,  // Ensure title is a string and required
  children: PropTypes.node.isRequired  // Ensure children are passed and are of type node
};

export default BodySectionWithMarginBottom;
