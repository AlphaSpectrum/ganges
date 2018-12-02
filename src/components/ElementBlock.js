import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { applyDataset } from './utils';


/**
 * A component that renders an HTML block.
 * It's used for drag and drop behavior. The block is the element to be dragged.
 *
 * @version 1.0
 * @author [Alan Campos]
 */
class ElementBlock extends React.Component {
  componentDidMount() {
    const { dataset } = this.props;
    if (dataset !== undefined || dataset !== null) {
      const thisNode = ReactDOM.findDOMNode(this);
      // The dataset is important because it tells droppable area
      // which React element to render.
      applyDataset(thisNode.dataset, dataset);
    }
  }

  render() {
    const {
      children,
      className,
      onDragStart,
      id,
      style,
    } = this.props;

    return (
      <div
        id={id}
        className={`element-block ${className} material-box-shadow`}
        style={style}
        onDragStart={onDragStart}
        draggable
      >
        <div className="text-white">{children}</div>
      </div>
    );
  }
}

ElementBlock.propTypes = {
  /**
	 * The id of the element.
	 */
  id: PropTypes.string.isRequired,
  /**
	 * HTML elements.
	 */
  children: PropTypes.node,
  /**
	 * The CSS class.
	 */
  className: PropTypes.string,
  /**
	 * Object containing data-[...] attributes. - It's important that the data-component-name is set
	 * so the droppable area knows what component to render.
	 */
  dataset: PropTypes.object,
  /**
	 * The inline HTML styles.
	 */
  style: PropTypes.object,
  /**
	 * Event that handles any behavior when the user starts dragging.
	 */
  onDragStart: PropTypes.func,
};

ElementBlock.defaultProps = {
  children: null,
  className: '',
  onDragStart: null,
  dataset: null,
  style: null,
};

export default ElementBlock;
