import React from 'react';
import PropTypes from 'prop-types';

const Label = ({ htmlFor, children }) => (
  <label htmlFor={htmlFor} {...otherProps}>{children}</label>
);

Label.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  children: PropTypes.node,
};

Label.defaultProps = {
  children: null,
};

export default Label;
