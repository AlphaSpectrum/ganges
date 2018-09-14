import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';

const CardBody = ({ children }) => (
  <div className="card-body">{children}</div>
);

CardBody.propTypes = {
  children: PropTypes.node,
};

CardBody.defaultProps = {
  children: '',
};
export default CardBody;
