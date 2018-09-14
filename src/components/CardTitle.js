import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';

const CardTitle = ({ children }) => (
  <h5 className="card-title">
    {children}
  </h5>
);

CardTitle.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CardTitle;
