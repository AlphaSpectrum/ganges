import React from 'react';
import PropTypes from 'prop-types';

const Col = ({
  children, size, breakpoint,
}) => (<div className={`col col-${breakpoint}-${size}`} >{children}</div>);

Col.propTypes = {
  breakpoint: PropTypes.string,
  children: PropTypes.node,
  size: PropTypes.number,
};
Col.defaultProps = {
  size: 12,
  breakpoint: 'md',
  children: null,
};

export default Col;
