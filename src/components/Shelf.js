import React from 'react';
import PropTypes from 'prop-types';
import '../css/styles.css';
import 'bootstrap';

const Shelf = ({
  title,
  children,
  maxWidth,
  minHeight,
}) => (
  <div
    className="shelf shelf-flex-container"
    style={{
      minHeight: `${minHeight}px`, maxWidth: `${maxWidth}px`, padding: '5px',
    }}
  >
    <div className="shelf-flex-container-inner" style={{ alignSelf: 'center', maxWidth: '200px'}}>
      <h1 className="display-1">SV</h1>
    </div>
    <div className="shelf-flex-container-inner" style={{ alignSelf: 'center' }}>
      <div className="shelf-flex-container">
        <h3>{title}</h3>
      </div>
      <div className="shelf-flex-container">
        <p className="lead" style={{ textAlign: 'left' }}>
          {children}
        </p>
      </div>
    </div>
  </div>
);

Shelf.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  maxWidth: PropTypes.number,
  minHeight: PropTypes.number,
};

Shelf.defaultProps = {
  maxWidth: 600,
  minHeight: 200,
};

export default Shelf;
