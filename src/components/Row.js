import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';

const Row = ({ children }) => (
  <div className="row">{children}</div>
);

Row.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Row;
