import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  id, className, children, onClick,
}) => (
  <button id={id} type="button" className={`btn ${className}`} onClick={onClick}>{children}</button>
);

Button.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.children,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultTypes = {
  className: 'btn-primary',
};

export default Button;