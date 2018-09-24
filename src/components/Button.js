import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ id, className, children }) => (
  <button id={id} type="button" className={`btn ${className}`}>{children}</button>
);

Button.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.children,
  className: PropTypes.string,
};

Button.defaultTypes = {
  className: 'btn-primary',
};
