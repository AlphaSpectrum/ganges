import React from 'react';
import PropTypes from 'prop-types';

const Block = ({
  children, size, breakpoint,
}) => (<div className={`col col-${breakpoint}-${size}`} >{children}</div>);

Block.propTypes = {
  breakpoint: PropTypes.string,
  children: PropTypes.node,
  size: PropTypes.number,
};

Block.defaultProps = {
  size: 12,
  breakpoint: 'md',
  children: null,
};

export default Block;
