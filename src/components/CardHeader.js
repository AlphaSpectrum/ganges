import React from 'react';
import PropTypes from 'prop-types';

const CardHeader = ({ children }) => (
  <div className="card-head">
    {children}
  </div>
);

CardHeader.propsType = {
  children: PropTypes.node.isRequired,
};


export default CardHeader;
