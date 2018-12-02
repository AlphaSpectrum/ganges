import React from 'react';
import PropTypes from 'prop-types';
import '../css/attributes.css';
import { applyDataset } from './utils';

/**
 * A component that renders an editable field.
 * It simulates a textarea that the user can click on to edit.
 *
 * @version 1.0
 * @author [Alan Campos]
 */
class EditableField extends React.Component {
  componentDidMount() {
    const {
      id,
      onChange,
      dataset,
      elements,
      identifier,
    } = this.props;

    // Get the specific HTML element.
    const thisNode = document.getElementById(id);

    if (dataset !== null && dataset !== undefined) {
      // Add a dataset if any.
      applyDataset(thisNode.dataset, dataset);
    }

    // Go through the array to find out which value to use to
    // pre-populate the field with.
    for (let i = 0; i < elements.length; i += 1) {
      if (elements[i].identifier === identifier) {
        const el = elements[i].editorSettings;
        for (let j = 0; j < el.length; j += 1) {
          if (el[j].component === 'editable-field') {
            if (el[j].properties.id === id) {
              const key = el[j].properties.dataset.propertyToChangeKey;
              const value = elements[i][key];
              thisNode.innerText = value;
              // Once we find what we need we don't care about the rest of the elements.
              // so we break out of the loop.
              break;
            }
          }
        }
      }
    }

    // Attach an event listener because a regular div does not have
    // the onChange attribute.
    if (onChange !== null) {
      document.getElementById(id).addEventListener('input', (ev) => {
        onChange(ev);
      }, false);
    }
  }

  render() {
    const {
      id,
      title,
      className,
      style,
    } = this.props;

    return (
      <div role="tool">
        <div role="presentation">
          <h6 className="presentation-title">{title}</h6>
          <div
            className={`editable-field ${className}`}
            style={style}
            id={id}
            contentEditable
          />
        </div>
      </div>
    );
  }
}

EditableField.propTypes = {
  /**
	 * The id of the element.
	 */
  id: PropTypes.string.isRequired,
  /**
	 * Object containing data-[...] attributes.
	 */
  dataset: PropTypes.object,
  /**
	 * The CSS class.
	 */
  className: PropTypes.string,
  /**
	 * This was specifically created to work with the form builder.
	 * It relies on the array of elements that the form builder keeps track of
	 * to pre-populate the field with any default value and/or user entered value.
	 */
  elements: PropTypes.array,
  /**
	 * This was specifically created to work with the form builder.
	 * It uses the identifier to locate the right index to apply the
	 * information from elements.
	 */
  identifier: PropTypes.string,
  /**
	 * The inline HTML styles.
	 */
  style: PropTypes.object,
  /**
	 * The title.
	 */
  title: PropTypes.string,
  /**
	 * The <code>onchange</code> attribute of the element.
	 */
  onChange: PropTypes.func,
};

EditableField.defaultProps = {
  title: 'Title',
  onChange: null,
  dataset: null,
  elements: [],
  identifier: '',
  className: '',
  style: null,
};

export default EditableField;
