import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  id, color, children, onClick,
}) => (
  <button id={id} type="button" className={`btn ${color}`} onClick={onClick}>{children}</button>
);

Button.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.children,
  color: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  color: 'btn-primary',
};

export default Button;
