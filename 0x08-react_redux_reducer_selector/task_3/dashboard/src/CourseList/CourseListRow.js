import React, { useState } from 'react';
import { StyleSheet, css } from 'aphrodite';
import propTypes from 'prop-types';

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
  // props:
  // - isHeader: bool, default: false
  // - textFirstCell: string, required
  // - textSecondCell: string, default: null
  
  const rowBackgroundColor = { backgroundColor: '#f5f5f5ab' };
  const headerRowBackgroundColor = { backgroundColor: '#deb5b545' };
  const rowChecked = { backgroundColor: '#e6e4e4' };
  const [isChecked, setIsChecked] = useState(false);

  // Handle checkbox toggle
  const handleCheckboxChange = () => setIsChecked(!isChecked);

  // Choose row style based on state
  const rowStyle = isChecked ? rowChecked : isHeader ? headerRowBackgroundColor : rowBackgroundColor;

  // Conditional rendering for header and non-header rows
  const rowContent = isHeader ? (
    textSecondCell ? (
      <>
        <th className={css(rowStyles.NOTth)}>{textFirstCell}</th>
        <th className={css(rowStyles.NOTth)}>{textSecondCell}</th>
      </>
    ) : (
      <th colSpan="2" className={css(rowStyles.th)}>{textFirstCell}</th>
    )
  ) : (
    <>
      <td>
        <input type="checkbox" onChange={handleCheckboxChange} />
        {textFirstCell}
      </td>
      <td>{textSecondCell}</td>
    </>
  );

  return (
    <tr style={rowStyle}>
      {rowContent}
    </tr>
  );
};

const rowStyles = StyleSheet.create({
  th: {
    textAlign: 'center',
    border: '1px solid',
    paddingBottom: '0.5rem',
  },
  NOTth: {
    textAlign: 'start',
    borderBottom: '1px solid',
  },
});

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

CourseListRow.propTypes = {
  isHeader: propTypes.bool,
  textFirstCell: propTypes.string.isRequired,
  textSecondCell: propTypes.oneOfType([propTypes.string, propTypes.number]),
};

export default CourseListRow;

