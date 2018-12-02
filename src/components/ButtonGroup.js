import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import 'bootstrap/dist/css/bootstrap.min.css';

/**
 * A component that renders a group of HTML of buttons.
 *
 * @version 1.0
 * @author [Alan Campos]
 */
const ButtonGroup = ({
	                     buttons, title, id, className, style,
}) => {
  // Empty array to hold the buttons.
  const buttonHTML = [];

  // Go through each button setting and add it to the array
  // of buttons.
  for (let i = 0; i < buttons.length; i += 1) {
    // It's standard to append the component name when it's passed as
    // child of another component and it will require a loop to render.
    const {
      buttonColor,
      buttonOnClick,
      buttonDataset,
      buttonClassName,
      buttonStyle,
      buttonId,
      buttonChildren,
    } = buttons[i];

    buttonHTML.push(
      <Button
        className={buttonClassName}
        id={buttonId}
        key={buttonId}
        color={buttonColor}
        onClick={buttonOnClick}
        dataset={buttonDataset}
        style={buttonStyle}
      >
        {buttonChildren}
      </Button>,
    );
  }

  return (
    <div
      id={id}
      role="tool"
      className={className}
      style={style}
    >
      <div
        role="presentation"
        className="btn-toolbar"
        aria-label="Toolbar with button groups"
      >
        {(title !== null && title !== undefined) ? <h6 className="presentation-title">{title}</h6> : ''}
        <div
          className="btn-group m-auto"
          role="group"
        >
          {buttonHTML}
        </div>
      </div>
    </div>
  );
};

ButtonGroup.propTypes = {
  /**
	 * Array of buttons.
	 */
  buttons: PropTypes.array,
  /**
	 * The CSS class.
	 */
  className: PropTypes.string,
  /**
	 * ID of the button group.
	 */
  id: PropTypes.string,
  /**
	 * The inline HTML styles.
	 */
  style: PropTypes.object,
  /**
	 * Title for the button group.
	 */
  title: PropTypes.string,
};

ButtonGroup.defaultProps = {
  id: '',
  title: '',
  buttons: [],
  className: '',
  style: null,
};

export default ButtonGroup;
