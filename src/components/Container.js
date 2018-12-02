import React from 'react';
import PropTypes from 'prop-types';

/**
 * A component that renders Containers. They are the most basic layout element and are required when
 * using the default grid system. Choose from a responsive, <code>fixed-width</code> container
 * (meaning its <code>max-width<code> changes at each breakpoint)
 * or fluid-width (meaning it’s 100% wide all the time).
 *
 * @version 1.0
 * @author [Alan Campos]
 */
const Container = ({
	                   children, fluid, className, id, style,
}) => {
  const withFluid = fluid === null || fluid === true ? '' : '-fluid';

  return (
    <div
      className={`container${withFluid} ${className}`}
      id={id}
      style={style}
    >
      {children}
    </div>
  );
};

Container.propTypes = {
  /**
	 * The inner elements.
	 */
  children: PropTypes.node,
  /**
	 * The CSS class.
	 */
  className: PropTypes.string,
  /**
	 * The id of the element.
	 */
  fluid: PropTypes.bool,
  /**
	 * Whether the container is fluid or not.
	 */
  id: PropTypes.string,
  /**
	 * The inline HTML styles.
	 */
  style: PropTypes.object,
};

Container.defaultProps = {
  id: '',
  style: null,
  children: null,
  fluid: false,
  className: '',
};

export default Container;
