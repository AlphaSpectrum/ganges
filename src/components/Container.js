import React from 'react';

const Container = ({ children, fluid }) => {
  const withFluid = fluid === undefined || fluid === false ? '' : '-fluid';
  return (<div className={`container${withFluid}`}>{children}</div>);
};

Container.propTypes = {
  children: PropTypes.node,
};

Container.defaultProps = {
  children: null,
};

export default Container;
