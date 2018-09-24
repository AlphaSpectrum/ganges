import React from 'react';

const Container = ({ children, ...otherProps }) => (<div className="container" {...otherProps}>{children}</div>);

export default Container;
