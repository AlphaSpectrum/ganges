import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';

const CardLink = ({ children, url }) => (
  <a href={url} className="card-link">{children}</a>
);

CardLink.propTypes = {
  children: PropTypes.string.isRequired,
  url: PropTypes.string,
};

CardLink.defaultProps = {
  url: '#',
};
export default CardLink;
