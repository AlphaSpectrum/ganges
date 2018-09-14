import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';

const CardText = ({ children }) => (
  <p className="card-text">{children}</p>
);

CardText.propTypes = {
  children: PropTypes.string.isRequired,
};

export default CardText;
