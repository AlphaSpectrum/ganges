import React from 'react';
import PropTypes from 'prop-types';

/**
 * A component that renders an HTML row.
 * Rows are wrappers for columns. Each column has horizontal padding (called a gutter)
 * for controlling the space between them.
 * This padding is then counteracted on the rows with negative margins.
 * This way, all the content in your columns is visually aligned down the left side.
 *
 * @version 1.0
 * @author [Alan Campos]
 *
 */
const Row = ({
	             children, className, id, style,
}) => (
  <div
    id={id}
    style={style}
    className={`row ${className}`}
  >
    {children}
  </div>
);

Row.propTypes = {
  /**
	 * The inner HTML elements.
	 */
  children: PropTypes.node,
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

Row.defaultProps = {
  id: '',
  className: '',
  children: null,
  style: null,
};
export default Row;
