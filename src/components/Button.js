import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';

const Button = ({ children, url, className }) => (
  <a className={`btn ${className}`} href={url} role="button">{children}</a>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  url: PropTypes.string,
};

Button.defaultProps = {
  url: '#',
  className: 'btn-primary',
};

export default Button;
