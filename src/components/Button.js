import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { applyDataset } from './utils';

/**
 * A component that renders an HTML button.
 *
 * @version 1.0
 * @author [Alan Campos]
 *
 */
class Button extends React.Component {
  componentDidMount() {
    const { dataset } = this.props;
    if (dataset !== null && dataset !== undefined) {
      const thisNode = ReactDOM.findDOMNode(this);
      applyDataset(thisNode.dataset, dataset);
    }
  }

  render() {
    const {
      id,
      color,
      children,
      onClick,
      className,
      style,
      isDisabled,
      size,
    } = this.props;

    // If button is disabled, render component with the disabled attribute.
    if (isDisabled) {
      return (
        <button
          id={id}
          className={`btn ${size} ${color} ${className}`}
          style={style}
          onClick={onClick}
          type="submit"
          disabled
        >
          {children}
        </button>
      );
    }

    return (
      <button
        id={id}
        className={`btn ${size} ${color} ${className}`}
        style={style}
        onClick={onClick}
        type="submit"
      >
        {children}
      </button>
    );
  }
}


Button.propTypes = {
  /**
	 * Button label.
	 */
  children: PropTypes.string,
  /**
	 * CSS classes.
	 */
  className: PropTypes.string,
  /**
	 * CSS class designating the color of the button.
	 */
  color: PropTypes.string,
  /**
	 * Object containing data-[...] attributes.
	 */
  dataset: PropTypes.object,
  /**
	 * ID of the button.
	 */
  id: PropTypes.string,
  /**
	 * Whether the button is disabled or not.
	 */
  isDisabled: PropTypes.bool,
  /**
	 * The size of the button.
	 */
  size: PropTypes.oneOf(['sm', 'lg']),
  /**
	 * Inline HTML styles.
	 */
  style: PropTypes.object,
  /**
	 * onclick event.
	 */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  color: 'btn-primary',
  children: '',
  onClick: null,
  id: '',
  className: '',
  dataset: null,
  style: {},
  isDisabled: false,
  size: '',
};

export default Button;
