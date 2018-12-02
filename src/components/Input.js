import React from 'react';
import PropTypes from 'prop-types';
import Label from './Label';

/**
 * A component that renders an HTML input.
 *
 * @version 1.0
 * @author [Alan Campos]
 *
 */
const Input = ({
	               type, className, id, placeholder, onChange, children, style, name,
}) => (
  <div style={{ float: 'left' }}>
    <Label htmlFor={id}>
      {children}
      <input
        style={style}
        id={id}
        type={type === null ? '' : type}
        className={`form-control ${className}`}
        placeholder={placeholder}
        onChange={onChange}
        name={name}
      />
    </Label>
  </div>
);

Input.propTypes = {
  /**
	 * The inner text for the input's label.
	 */
  children: PropTypes.string,
  /**
	 * The CSS class.
	 */
  className: PropTypes.string,
  /**
	 * The id of the element.
	 */
  id: PropTypes.string,
  /**
	 * The placeholder for the input.
	 */
  placeholder: PropTypes.string,
  /**
	 * The inline HTML styles.
	 */
  style: PropTypes.object,
  /**
	 * The type of input.
	 */
  type: PropTypes.oneOf(['text', 'password', 'reset', 'email', 'tel', 'number']),
  /**
	 * The <code>onchange</code> attribute.
	 */
  onChange: PropTypes.func,
};

Input.defaultProps = {
  id: '',
  type: 'text',
  className: '',
  placeholder: 'Placeholder',
  onChange: null,
  children: null,
  style: null,
};
export default Input;
