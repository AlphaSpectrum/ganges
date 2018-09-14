import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';

const CardImageOverlay = ({ children, src, alt }) => (
  <div>
    <img className="card-img" src={src} alt={alt} />
    <div className="card-img-overlay">
      {children}
    </div>
  </div>
);

CardImageOverlay.propTypes = {
  children: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

CardImageOverlay.defaultProps = {
  alt: '',
};
export default CardImageOverlay;
