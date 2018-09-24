import React from 'react';
import PropTypes from 'prop-types';

const sidebar = {
  position: 'fixed',
  top: 0,
  bottom: 0,
  left: 0,
  // zIndex: 100, // Behind the navbar
  // padding: '48px 0 0', // Height of navbar
  boxShadow: 'inset -1px 0 0 rgba(0, 0, 0, .1)',
};

const sidebarSticky = {
  position: 'relative',
  top: 0,
  height: 'calc(100vh - 48px)',
  paddingTop: '.5rem',
  overflowX: 'hidden',
  overflow: 'auto', // Scrollable contents if viewport is shorter than content.
};

const Sidebar = ({ children, breakpoint, size }) => (
  <nav className={`col-${breakpoint}-${size} d-none d-${breakpoint}-block bg-light`} style={sidebar}>
    <div style={sidebarSticky}>
      {children}
    </div>
  </nav>
);

Sidebar.propTypes = {
  breakpoint: PropTypes.string,
  size: PropTypes.number,
};

Sidebar.defaultProps = {
  size: '2',
  breakpoint: 'md',
};

export default Sidebar;
