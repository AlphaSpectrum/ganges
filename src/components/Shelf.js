import React from 'react';
import PropTypes from 'prop-types';
import '../css/styles.css';

const Shelf = ({ children }) => (
  <div className="flex-container">
    <div className="flex-container-inner" style={{ background: 'red', alignSelf: 'center' }}>1</div>
    <div className="flex-container-inner">
      <div className="flex-container text-center" style={{ background: 'green' }}>
        <div>Title</div>
      </div>
      <div className="flex-container text-center" style={{ background: 'blue' }}>
        <div>Body</div>
      </div>
    </div>
  </div>
);

Shelf.propTypes = {
  children: PropTypes.node,
};

Shelf.defaultProps = {
  children: '...',
};
export default Shelf;
