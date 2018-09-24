import React from 'react';

const Container = ({ children, fluid, ...otherProps }) => {
  if (fluid === null) {
    return (<div className="container" {...otherProps}>{children}</div>);
  }
  return (<div className="container-fluid" {...otherProps}>{children}</div>);
};

export default Container;
