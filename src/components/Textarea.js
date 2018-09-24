import React from 'react';
import PropTypes from 'prop-types';

const Textarea = ({ id, rows, ...otherProps }) => (
  <textarea className="form-control" id={id} rows={rows} {...otherProps} />
);

Textarea.propTypes = {
  id: PropTypes.string.isRequired,
  rows: PropTypes.number,
};

Textarea.defaultProps = {
  rows: 3,
};

export default Textarea;
