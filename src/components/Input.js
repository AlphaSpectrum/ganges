
import React from 'react';
import PropTypes from 'prop-types';

const Input = ({
  type, className, id, placeholder, onChange,
}) => (
  <input type={type === null ? '' : type} className={className} id={id} placeholder={placeholder} onChange={onChange} />
);

Input.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};

Input.defaultProps = {
  className: 'form-control',
  placeholder: 'Placeholder',
  onChange: null,
};
export default Input;
