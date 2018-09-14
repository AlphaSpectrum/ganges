import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';

const CardBody = ({ children, styles }) => (
  <div className="card-body" style={styles}>{children}</div>
);

CardBody.propTypes = {
  children: PropTypes.node,
  styles: PropTypes.object,
};

CardBody.defaultProps = {
  children: '',
  styles: [],
};
export default CardBody;
