import React from 'react';
import PropTypes from 'prop-types';

/**
 * A component that renders an HTML input label.
 *
 * @version 1.0
 * @author [Alan Campos]
 *
 */
const Label = ({
	               htmlFor, children, style, className, id,
}) => (
  <label
    id={id}
    style={style}
    className={className}
    htmlFor={htmlFor}
  >
    {children}
  </label>
);

Label.propTypes = {
  /**
	 * The for attribute of the label.
	 */
  htmlFor: PropTypes.string.isRequired,
  /**
	 * The inner text of the label.
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
	 * The inline HTML styles.
	 */
  style: PropTypes.object,
};

Label.defaultProps = {
  children: null,
  className: '',
  style: null,
  id: '',
};

export default Label;
