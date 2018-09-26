import React from 'react';
import PropTypes from 'prop-types';

const RangeSlider = ({
  id, max, min, step, value,
}) => (
  <div>
    <input id={id} type="range" className="custom-range" min={min} max={max} step={step} value={value} />
  </div>
);

export default RangeSlider;
