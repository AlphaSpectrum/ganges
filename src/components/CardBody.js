import React from 'react';
import PropTypes from 'prop-types';

const CardBody = ({ children }) => (
  <div className="card-body">
    {children}
  </div>
);

CardBody.propsType = {
  children: PropTypes.node.isRequired,
};

export default CardBody;
