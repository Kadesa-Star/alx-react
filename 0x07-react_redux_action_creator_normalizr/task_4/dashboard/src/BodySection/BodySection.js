import React from "react";
import PropTypes from 'prop-types';
import './BodySection.css';

class BodySection extends React.Component {
  render() {
    return (
      <div className="bodySection">
        <h2>{this.props.title}</h2>
        {this.props.children}
      </div>
    );
  }
}

BodySection.propTypes = {
  title: PropTypes.string.isRequired, // title is required and should be a string
  children: PropTypes.node.isRequired  // children can be any type of node
};

BodySection.defaultProps = {
  title: ''  // default value for title if not provided
};

export default BodySection;
