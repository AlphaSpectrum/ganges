import React from 'react';
import PropTypes from 'prop-types';
import Label from './Label';

/**
 * A component that renders an HTML textarea.
 *
 * @version 1.0
 * @author [Alan Campos]
 *
 */
const Textarea = ({
	                  id, rows, onChange, children,
}) => (
  <div
    style={{ marginRight: '8px' }}
  >
    {(children !== undefined || children !== null) ? <Label htmlFor={id}>{children}</Label> : '' }
    <textarea
      style={{ minWidth: '450px' }}
      className="form-control"
      id={id}
      rows={rows}
      onChange={onChange}
    />
  </div>
);


Textarea.propTypes = {
  /**
	 * The id of the element.
	 */
  id: PropTypes.string.isRequired,
  /**
	 * The inner text for this element's label.
	 */
  children: PropTypes.string,
  /**
	 * The number of rows (affects height).
	 */
  rows: PropTypes.number,
  /**
	 * The <code>onchange</code> attribute.
	 */
  onChange: PropTypes.func,
};

Textarea.defaultProps = {
  rows: 3,
  onChange: null,
  children: '',
};

export default Textarea;
