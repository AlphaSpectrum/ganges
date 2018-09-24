import React from 'react';

const Row = ({ children, ...otherProps }) => (<div className="row" {...otherProps}>{children}</div>);

export default Row;
