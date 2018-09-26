import React from 'react';
import PropTypes from 'prop-types';

const RangeSlider = ({
  id, max, min, step, value,
}) => (
  <div>
    <input id={id} type="range" className="custom-range" min={min} max={max} step={step} value={value} />
  </div>
);

RangeSlider.propTypes = {
  id: PropTypes.string,
  max: PropTypes.number,
  min: PropTypes.number,
  step: PropTypes.number,
  value: PropTypes.number,
};

RangeSlider.defaultProps = {
  id: null,
  max: 10,
  min: 0,
  step: 1,
  value: null,
};

export default RangeSlider;
