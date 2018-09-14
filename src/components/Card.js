import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';


const Card = ({ children }) => (
  <div className="card m-2">
    {children}
  </div>
);

Card.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Card;
