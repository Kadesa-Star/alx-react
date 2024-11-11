import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  // Define inline styles for row and header row
  const styleRow = { backgroundColor: '#f5f5f5ab' };
  const styleHeaderRow = { backgroundColor: '#deb5b545' };

  // Determine what to render based on whether it's a header row or not
  let myElement;
  if (isHeader) {
    if (textSecondCell === null) {
      myElement = <th colSpan="2">{textFirstCell}</th>;
    } else {
      myElement = (
        <Fragment>
          <th>{textFirstCell}</th>
          <th>{textSecondCell}</th>
        </Fragment>
      );
    }
  } else {
    myElement = (
      <Fragment>
        <td>{textFirstCell}</td>
        <td>{textSecondCell}</td>
      </Fragment>
    );
  }

  // Select the appropriate background style
  const stylesBackground = isHeader ? styleHeaderRow : styleRow;

  return <tr style={stylesBackground}>{myElement}</tr>;
}

// Prop validation
CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

// Default props for isHeader and textSecondCell
CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

export default CourseListRow;
