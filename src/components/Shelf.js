import React from 'react';
import PropTypes from 'prop-types';
import '../css/styles.css';
import 'bootstrap';

const Shelf = ({ title }) => (
  <div className="flex-container">
    <div className="flex-container-inner" style={{ background: 'red', alignSelf: 'center' }}>1</div>
    <div className="flex-container-inner">
      <div className="flex-container text-center" style={{ background: 'green' }}>
        <h2>{title}</h2>
      </div>
      <div className="flex-container text-center" style={{ background: 'blue' }}>
        <div>Body</div>
      </div>
    </div>
  </div>
);

Shelf.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Shelf;
