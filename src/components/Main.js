import React from 'react';
import PropTypes from 'prop-types';

const Main = ({ children, breakpoint, size }) => (
  <main role="main" className={`col-${breakpoint}-${size}`}>
    {children}
  </main>
);

Main.propTypes = {
  breakpoint: PropTypes.string,
  children: PropTypes.node,
  size: PropTypes.number,
};

Main.defaultProps = {
  breakpoint: 'md',
  size: 10,
  children: null,
};

export default Main;
