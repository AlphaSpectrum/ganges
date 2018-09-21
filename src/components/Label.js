import React from 'react';
import PropTypes from 'prop-types';

const Label = ({ htmlFor, children, ...otherProps }) => (
  <label htmlFor={htmlFor} {...otherProps}>{children}</label>
);

Label.propTypes = {
  htmlFor: PropTypes.string.isRequired,
};

export default Label;
