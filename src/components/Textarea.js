import React from 'react';
import PropTypes from 'prop-types';

const Textarea = ({
  id, rows, onChange, ...otherProps
}) => (
  <textarea className="form-control" id={id} rows={rows} onChange={onChange} {...otherProps} />
);

Textarea.propTypes = {
  id: PropTypes.string.isRequired,
  rows: PropTypes.number,
};

Textarea.defaultProps = {
  rows: 3,
};

export default Textarea;
