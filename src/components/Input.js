
import React from 'react';
import PropTypes from 'prop-types';

const Input = ({
  type, className, id, placeholder, onChange, ...otherProps
}) => (
  <input type={type === null ? '' : type} className={className} id={id} placeholder={placeholder} onChange={onChange} {...otherProps} />
);


Input.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  className: 'form-control',
  placeholder: 'Placeholder',
};
export default Input;
