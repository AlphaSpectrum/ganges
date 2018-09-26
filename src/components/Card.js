import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ children, style }) => (
  <div className="card" style={style}>
    {children}
  </div>
);

Card.propsType = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
};

Card.defaultProps = {
  style: null,
};

export default Card;
