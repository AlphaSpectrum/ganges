import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';

const Column = ({
  children, breakpoint, size, styles,
}) => (
  <div className={`col-${breakpoint}-${size}`} style={styles}>
    {children}
  </div>
);

Column.propTypes = {
  children: PropTypes.node.isRequired,
  breakpoint: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
  size: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  styles: PropTypes.object,
};

Column.defaultProps = {
  breakpoint: 'md',
  size: 12,
  styles: {},
};
export default Column;
