import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { getUniqueId } from './utils';
import '../css/attributes.css';
import Button from './Button';
import ButtonGroup from './ButtonGroup';
import EditableField from './EditableField';

/**
 * A component that renders an editable dialog.
 * It's an component that constraint its elements within a specified width.
 *
 * @version 1.0
 * @author [Alan Campos]
 */
class EditorDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorContainerId: getUniqueId(),
      isDialogEditorVisible: false,
    };

    this.handleOnClick = this.handleOnClick.bind(this);
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.makeComponent = this.makeComponent.bind(this);
    this.getComponent = this.getComponent.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  getComponent(obj) {
    switch (obj.component) {
      case 'button-group':
        return (
          <ButtonGroup
            id={obj.properties.id}
            title={obj.properties.title}
            buttons={obj.properties.buttons}
            onClick={obj.onClick}
            dataset={obj.properties.buttons.dataset}
            key={obj.properties.id}
          />
        );
      case 'editable-field':
        return (
          <EditableField
            elements={this.props.elements}
            id={obj.properties.id}
            identifier={obj.properties.identifier}
            title={obj.properties.title}
            dataset={obj.properties.dataset}
            onChange={obj.onChange}
            key={obj.properties.id}
          />
        );
      default:
        return null;
    }
  }


  handleOnClick() {
    const { isDialogEditorVisible } = this.state;
    this.setState({ isDialogEditorVisible: !isDialogEditorVisible });
  }

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.setState({ isDialogEditorVisible: false });
    }
  }

  makeComponent(obj) {
    if (obj !== undefined) {
      const elements = [];
      for (let i = 0; i < obj.length; i += 1) {
        elements.push(this.getComponent(obj[i]));
      }
      return elements;
    }
    return null;
  }

  render() {
    const {
      isDialogEditorVisible,
      editorContainerId,
    } = this.state;

    const {
      onClick,
      dataset,
      editorSettings,
      className,
      id,
      style,
    } = this.props;

    if (isDialogEditorVisible) {
      return (
        <div
          className={`editor-dialog ${className}`}
          id={id}
          style={style}
          ref={this.setWrapperRef}
        >

          <Button
            className="active text-danger"
            color="btn-light"
            onClick={this.handleOnClick}
            style={{ zIndex: '888' }}
          >
            <FontAwesomeIcon icon={faTimesCircle} />
          </Button>

          <div
            id={editorContainerId}
            className="editor-dialog-container material-box-shadow animated fadeInDown"
          >
            <div className="editor-dialog-title">EDIT</div>

            <div className="editor-dialog-body">
              {this.makeComponent(editorSettings)}
            </div>

            <div className="editor-dialog-footer text-center">
              <Button
                className="btn-outline-danger my-1"
                style={{ width: '95%' }}
                onClick={onClick}
                dataset={dataset}
              >
                {'DELETE'}
              </Button>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div
        className={`editor-dialog ${className}`}
        id={id}
        style={style}
      >
        <Button
          color="btn-light"
          onClick={this.handleOnClick}
          style={{ zIndex: '888' }}
        >
          <FontAwesomeIcon icon={faPen} />
        </Button>
      </div>
    );
  }
}

EditorDialog.propTypes = {
  /**
	 * This was specifically created to work the FormBuilder component.
	 * It takes the editor settings that is represented by an array of objects,
	 * and render any element that it recognizes by looking at the component
	 * attribute of each index.
	 */
  editorSettings: PropTypes.array.isRequired,
  /**
	 * The CSS class.
	 */
  className: PropTypes.string,
  /**
	 * Object containing data-[...] attributes.
	 */
  dataset: PropTypes.object,
  /**
	 * The id of the element.
	 */
  id: PropTypes.string,
  /**
	 * The inline HTMl styles.
	 */
  style: PropTypes.object,
  /**
	 * The <code>onclick</click> element attribute.
	 */
  onClick: PropTypes.func,
};

EditorDialog.defaultProps = {
  id: '',
  className: '',
  style: null,
  onClick: null,
  dataset: null,
};

export default EditorDialog;
