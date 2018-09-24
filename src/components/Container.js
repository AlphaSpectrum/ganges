import React from 'react';

const Container = ({ children, fluid, ...otherProps }) => {
  const withFluid = fluid === undefined || fluid === false ? '' : '-fluid';
  return (<div className={`container${withFluid}`} {...otherProps}>{children}</div>);
};

export default Container;
