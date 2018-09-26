import React from 'react';
import PropTypes from 'prop-types';

const ElementBlock = ({
  children,
}) => (
  <div className="m-2 element-block bg-light">
    <div className="text-secondary">INPUT</div>
  </div>
);

ElementBlock.propTypes = {
  children: PropTypes.node,
};

ElementBlock.defaultProps = {
  children: null,
};

export default ElementBlock;