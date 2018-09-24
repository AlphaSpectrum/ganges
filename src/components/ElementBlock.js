import React from 'react';
import PropTypes from 'prop-types';

const ElementBlock = ({
  children,
}) => (
  <div className="element-block">
    <div>el</div>
  </div>
);

ElementBlock.propTypes = {
  children: PropTypes.node,
};

ElementBlock.defaultProps = {
  children: null,
};

export default ElementBlock;
