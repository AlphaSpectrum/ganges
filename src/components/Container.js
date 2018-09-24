import React from 'react';
import PropTypes from 'prop-types';

const Container = ({children, ...otherProps}) => (
    {console.log(...otherProps.flui);}
    <div className='container' {...otherProps}>{children}</div>
)