import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';

const Row = ({ children, styles }) => (
  <div className="row" style={styles}>{children}</div>
);

Row.propTypes = {
  children: PropTypes.node.isRequired,
  styles: PropTypes.object,
};

Row.defaultProps = {
  styles: {},
};

export default Row;
