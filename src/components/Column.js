import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';

const Column = ({ children, breakpoint, size }) => (
  <div className={`col-${breakpoint}-${size}`}>
    {children}
  </div>
);

Column.propTypes = {
  children: PropTypes.node.isRequired,
  breakpoint: PropTypes.string,
  size: PropTypes.number,
};

Column.defaultProps = {
  breakpoint: 'md',
  size: 12,
};
export default Column;
