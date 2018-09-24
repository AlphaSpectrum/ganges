import React from 'react';
import PropTypes from 'prop-types';

const Col = ({
  children, size, breakpoint, ...otherProps
}) => (<div className={`col col-${breakpoint}-${size}`} {...otherProps}>{children}</div>);

Col.propTypes = {
  breakpoint: PropTypes.string,
  size: PropTypes.number,
};
Col.defaultProps = {
  size: 12,
  breakpoint: 'md',
};

export default Col;
