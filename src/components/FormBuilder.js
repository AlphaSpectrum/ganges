import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUndo, faRedo, faTrash, faSave,
}
  from '@fortawesome/free-solid-svg-icons';
import Container from './Container';
import Row from './Row';
import Col from './Col';
import Sidebar from './Sidebar';
import ElementBlock from './ElementBlock';
import Button from './Button';
import Input from './Input';
import Textarea from './Textarea';
import EditorDialog from './EditorDialog';
import { getUniqueId, copy, download } from './utils';

/**
 * A component that renders the Form Builder application.
 *
 * @version 1.0
 * @author [Alan Campos]
 *
 */
class FormBuilder extends React.Component {
  /**
	 * Gets the HTML elements that compose the component given.
	 * @param {object} obj
	 * @returns {*}
	 */
  static getComponentHTML(obj) {
    if (obj !== null) {
      switch (obj.component) {
        case 'button':
          return (
            <Button
              id={obj.id}
              color={obj.color}
              className="mr-2"
              style={{ height: '38px', marginTop: '32px' }}
            >
              {obj.children}
            </Button>
          );
        case 'input':
          return (
            <Input
              id={obj.id}
              type={obj.type}
              placeholder={obj.placeholder}
              name={obj.name}
            >
              {obj.children}
            </Input>
          );
        case 'textarea':
          return (
            <Textarea
              id={obj.id}
              rows={obj.rows}
            >
              {obj.children}
            </Textarea>
          );
        default:
          return null;
      }
    }
    return null;
  }

  static handleOnDragStart(ev) {
    // We are passing the component name that is being dragged so React knows which
    // component to render when the user drops it.
    ev.dataTransfer.setData('componentName', ev.target.dataset.componentName);
  }

  static handleOnDragOver(ev) {
    ev.preventDefault();
    // By adding a gray background while dragging over the droppable area we are
    // letting the user know that is the location where they can drop the
    // element.
    document.getElementById('bg-drop').style.background = '#EDEDED';
  }

  constructor(props) {
    super(props);
    this.state = {
      elements: [],
      undoStack: [],
      redoStack: [],
    };

    this.handleOnDrop = this.handleOnDrop.bind(this);
    this.handleDeleteComponenetOnClick = this.handleDeleteComponenetOnClick.bind(this);
    this.makeComponent = this.makeComponent.bind(this);
    this.handleButtonGroupOnClick = this.handleButtonGroupOnClick.bind(this);
    this.getComponentSettings = this.getComponentSettings.bind(this);
    this.handleEditableFieldOnChange = this.handleEditableFieldOnChange.bind(this);
    this.handleUndoButtonOnClick = this.handleUndoButtonOnClick.bind(this);
    this.handleRedoButtonOnClick = this.handleRedoButtonOnClick.bind(this);
    this.handleDeleteButtonOnClick = this.handleDeleteButtonOnClick.bind(this);
    this.handleSaveButtonOnClick = this.handleSaveButtonOnClick.bind(this);
    this.handleOnDragLeaveCapture = this.handleOnDragLeaveCapture.bind(this);
  }

  getComponentSettings(component) {
    const uid = getUniqueId();

    switch (component) {
      case 'button':
        return {
          component: 'button',
          color: 'btn-primary',
          id: '',
          children: 'Button',
          identifier: uid,
          editorSettings: [
            {
              component: 'button-group',
              properties: {
                title: 'Color',
                buttons: [
                  {
                    buttonId: getUniqueId(),

                    buttonOnClick: this.handleButtonGroupOnClick,
                    buttonChildren: '',
                    buttonColor: 'btn-primary',
                    buttonDataset: {
                      componentToChangeIdentifier: uid,
                      propertyToChangeKey: 'color',
                      propertyToChangeValue: 'btn-primary',
                    },
                  },
                  {
                    buttonId: getUniqueId(),

                    buttonOnClick: this.handleButtonGroupOnClick,

                    buttonChildren: '',
                    buttonColor: 'btn-danger',
                    buttonDataset: {
                      componentToChangeIdentifier: uid,
                      propertyToChangeKey: 'color',
                      propertyToChangeValue: 'btn-danger',
                    },
                  },
                  {
                    buttonOnClick: this.handleButtonGroupOnClick,
                    buttonId: getUniqueId(),
                    buttonChildren: '',
                    buttonColor: 'btn-warning',
                    buttonDataset: {
                      componentToChangeIdentifier: uid,
                      propertyToChangeKey: 'color',
                      propertyToChangeValue: 'btn-warning',
                    },
                  },
                  {
                    buttonOnClick: this.handleButtonGroupOnClick,
                    buttonId: getUniqueId(),
                    buttonChildren: '',
                    buttonColor: 'btn-info',
                    buttonDataset: {
                      componentToChangeIdentifier: uid,
                      propertyToChangeKey: 'color',
                      propertyToChangeValue: 'btn-info',
                    },
                  },
                  {
                    buttonOnClick: this.handleButtonGroupOnClick,
                    buttonId: getUniqueId(),

                    buttonChildren: '',
                    buttonColor: 'btn-dark',
                    buttonDataset: {
                      componentToChangeIdentifier: uid,
                      propertyToChangeKey: 'color',
                      propertyToChangeValue: 'btn-dark',
                    },
                  },
                  {
                    buttonOnClick: this.handleButtonGroupOnClick,
                    buttonId: getUniqueId(),

                    buttonChildren: '',
                    buttonColor: 'btn-success',
                    buttonDataset: {
                      componentToChangeIdentifier: uid,
                      propertyToChangeKey: 'color',
                      propertyToChangeValue: 'btn-success',
                    },
                  },
                  {
                    buttonOnClick: this.handleButtonGroupOnClick,
                    buttonId: getUniqueId(),

                    buttonChildren: '',
                    buttonColor: 'btn-secondary',
                    buttonDataset: {
                      componentToChangeIdentifier: uid,
                      propertyToChangeKey: 'color',
                      propertyToChangeValue: 'btn-secondary',
                    },
                  },
                ],
              },
            },
            {
              component: 'editable-field',
              properties: {
                title: 'Button Label',
                identifier: uid,
                id: getUniqueId(),
                dataset: {
                  componentToChangeIdentifier: uid,
                  propertyToChangeKey: 'children',
                },
              },
              onChange: this.handleEditableFieldOnChange,
            },
          ],
        };
      case 'input':
        return {
          component: 'input',
          id: '',
          type: 'text',
          children: 'Label',
          placeholder: 'Placeholder',
          identifier: uid,
          name: '',
          editorSettings: [
            {
              component: 'editable-field',
              properties: {
                title: 'Label',
                identifier: uid,
                id: getUniqueId(),
                dataset: {
                  componentToChangeIdentifier: uid,
                  propertyToChangeKey: 'children',
                },
              },
              onChange: this.handleEditableFieldOnChange,
            },
            {
              component: 'editable-field',
              properties: {
                title: 'Placeholder',
                identifier: uid,
                id: getUniqueId(),
                dataset: {
                  componentToChangeIdentifier: uid,
                  propertyToChangeKey: 'placeholder',
                },
              },
              onChange: this.handleEditableFieldOnChange,
            },
            {
              component: 'editable-field',
              properties: {
                title: 'Name',
                identifier: uid,
                id: getUniqueId(),
                dataset: {
                  componentToChangeIdentifier: uid,
                  propertyToChangeKey: 'name',
                },
              },
              onChange: this.handleEditableFieldOnChange,
            },
          ],
        };
      case 'textarea':
        return {
          component: 'textarea',
          id: '',
          children: 'Label',
          rows: 3,
          identifier: uid,
          editorSettings: [
            {
              component: 'editable-field',
              properties: {
                title: 'Label',
                identifier: uid,
                id: getUniqueId(),
                dataset: {
                  componentToChangeIdentifier: uid,
                  propertyToChangeKey: 'children',
                },
              },
              onChange: this.handleEditableFieldOnChange,
            },
          ],
        };
      default:
        return null;
    }
  }

  makeComponent(obj) {
    const elements = [];
    if (obj !== null) {
      for (let i = 0; i < obj.length; i += 1) {
        const component = FormBuilder.getComponentHTML(obj[i]);
        if (obj[i] !== null) {
          const html = (
            <div
              className="input-align-fix"
              id={obj[i].identifier}
              key={obj[i].identifier}
            >
              {component}
              <EditorDialog
                elements={this.state.elements}
                onClick={this.handleDeleteComponenetOnClick}
                editorSettings={obj[i].editorSettings}
                dataset={{ deleteIdentifier: obj[i].identifier }}
              />
            </div>
          );
          elements.push(html);
        }
      }
      return elements;
    }
    return null;
  }

  handleOnDrop(ev) {
    ev.preventDefault();
    // Remove the gray background feedback.
    document.getElementById('bg-drop').style.background = 'white';
    // Get the name of the component the user dragged.
    const componentName = ev.dataTransfer.getData('componentName');
    if (componentName !== '' && componentName !== null && componentName !== undefined) {
      // Get the node that indicates to the user that the elements are draggable.
      // If the element is not null remove it because the user already knows that things
      // can be dragged and dropped.
      const indicator = document.getElementById('drag-and-drop-indicator') || null;
      if (indicator !== null) {
        indicator.parentElement.removeChild(indicator);
      }
      // Get the component's default settings and add it this state.
      const componentSettings = this.getComponentSettings(componentName);
      // Clone the state's `elements`.
      const { elements, undoStack } = this.state;
      const elementsUpdated = copy(elements); // `copy()` clones the array.
      const undoStackUpdated = copy(undoStack);
      // Add the new component settings to the cloned array.
      elementsUpdated.push(componentSettings);
      undoStackUpdated.push(elementsUpdated);
      // Update this component's state with the newly updated element array.
      this.setState({ elements: elementsUpdated, undoStack: undoStackUpdated });
    }
  }

  handleDeleteComponenetOnClick(ev) {
    // Clone this state's elements and undo stack.
    const { elements, undoStack } = this.state;
    const elementsUpdated = copy(elements);
    const undoStackUpdated = copy(undoStack);

    for (let index = 0; index < elementsUpdated.length; index += 1) {
      if (ev.target.dataset.deleteIdentifier === elementsUpdated[index].identifier) {
        elementsUpdated.splice(index, 1);
        // Update the undo stack clone with user changes.
        undoStackUpdated.push(elementsUpdated);
        this.setState({ elements: elementsUpdated, undoStack: undoStackUpdated });
        break;
      }
    }
  }

  handleButtonGroupOnClick(ev) {
    const {
      componentToChangeIdentifier,
      propertyToChangeKey,
      propertyToChangeValue,
    } = ev.target.dataset;

    const { elements, undoStack } = this.state;
    const elementsUpdated = copy(elements);
    const undoStackUpdated = copy(undoStack);
    undoStackUpdated.push(elementsUpdated);

    for (let i = 0; i < elementsUpdated.length; i += 1) {
      if (elementsUpdated[i].identifier === componentToChangeIdentifier) {
        elementsUpdated[i][propertyToChangeKey] = propertyToChangeValue;
        this.setState({ elements: elementsUpdated, undoStack: undoStackUpdated });
        break;
      }
    }
  }

  handleEditableFieldOnChange(ev) {
    const propertyToChangeValue = ev.target.innerText;
    const {
      componentToChangeIdentifier,
      propertyToChangeKey,
    } = ev.target.dataset;

    const { elements, undoStack } = this.state;
    const elementsUpdated = copy(elements);

    for (let i = 0; i < elementsUpdated.length; i += 1) {
      if (elementsUpdated[i].identifier === componentToChangeIdentifier) {
        elementsUpdated[i][propertyToChangeKey] = propertyToChangeValue;
        this.setState({ elements: elementsUpdated });
        break;
      }
    }

    // Wait 2 seconds before adding a new element to the stack so
    // we don't keep a copy of each character typed, but instead
    // 2 second intervals of interactions.
    setTimeout(() => {
      const undoStackUpdated = copy(undoStack);
      undoStackUpdated.push(elementsUpdated);
      this.setState({ undoStack: undoStackUpdated });
    }, 2000);
  }

  handleUndoButtonOnClick() {
    // Clone the undoStack store in this component's state.
    const { undoStack, redoStack } = this.state;
    const undoStackUpdated = copy(undoStack);
    const redoStackUpdated = copy(redoStack);
    // Pop last element from stack
    const poppedFromUndoStack = undoStackUpdated.pop();
    // Add popped element to the redo stack.
    redoStackUpdated.push(poppedFromUndoStack);
    // Update the view
    const stackLength = undoStackUpdated.length;
    this.setState({
      elements: stackLength === 0 ? [] : undoStackUpdated[stackLength - 1],
      undoStack: undoStackUpdated,
      redoStack: redoStackUpdated,
    });
  }

  handleRedoButtonOnClick() {
    const { undoStack, redoStack } = this.state;
    const redoStackUpdated = copy(redoStack);
    const undoStackUpdated = copy(undoStack);
    const poppedFromRedoStack = redoStackUpdated.pop();
    undoStackUpdated.push(poppedFromRedoStack);
    this.setState({
      elements: poppedFromRedoStack,
      undoStack: undoStackUpdated,
      redoStack: redoStackUpdated,
    });
  }

  handleDeleteButtonOnClick() {
    this.setState({ elements: [] });
  }

  handleSaveButtonOnClick() {
    const { elements } = this.state;
    const settings = JSON.stringify(copy(elements));
    download('settings.txt', settings);
  }

  handleOnDragLeaveCapture() {
    document.getElementById('bg-drop').style.background = 'white';
  }

  render() {
    const { elements, undoStack, redoStack } = this.state;
    const isUndoDisabled = undoStack.length === 0;
    const isRedoDisabled = redoStack.length === 0;
    return (
      <div id="bg-drop">
        <nav
          className="navbar fixed-top navbar-light bg-terra-cotta material-box-shadow"
          style={{ zIndex: 1000 }}
        >
          <span className="navbar-brand mb-0 h1 text-white">FormBuilder</span>
          <div>
            <Button
              isDisabled={isUndoDisabled}
              onClick={this.handleUndoButtonOnClick}
              color="btn-outline-light"
              className="mx-1"
            >
              <FontAwesomeIcon icon={faUndo} />
            </Button>
            <Button
              isDisabled={isRedoDisabled}
              onClick={this.handleRedoButtonOnClick}
              color="btn-outline-light"
              className="mx-1"
            >
              <FontAwesomeIcon icon={faRedo} />
            </Button>
          </div>
          <div>
            <Button
              isDisabled={false}
              onClick={this.handleSaveButtonOnClick}
              color="btn-outline-light"
              className="mx-1"
            >
              <FontAwesomeIcon icon={faSave} />
            </Button>
          </div>
          <div>
            <Button
              onClick={this.handleDeleteButtonOnClick}
              color="btn-outline-light"
            >
              <FontAwesomeIcon icon={faTrash} />
            </Button>
          </div>
        </nav>
        <Container fluid>
          <Row>
            <Col size={3}>
              <Sidebar
                size={3}
                className="text-center"
                bgColor="bg-light"
              >
                <ElementBlock
                  id="button-block-el"
                  className="mb-5 rounded"
                  onDragStart={FormBuilder.handleOnDragStart}
                  dataset={{ componentName: 'button' }}
                >
                  {'Button'}
                </ElementBlock>
                <ElementBlock
                  id="input-block-el"
                  className="my-5 rounded"
                  onDragStart={FormBuilder.handleOnDragStart}
                  dataset={{ componentName: 'input' }}
                >
                  {'Input'}
                </ElementBlock>
                <ElementBlock
                  id="textarea-block-el"
                  className="my-5 rounded"
                  onDragStart={FormBuilder.handleOnDragStart}
                  dataset={{ componentName: 'textarea' }}
                >
                  {'Textarea'}
                </ElementBlock>
              </Sidebar>
            </Col>
            <Col
              id="droppable-area-canvas"
              size={9}
            >
              <div
                className="col-md-12"
                id="droppable-area"
                onDragOver={FormBuilder.handleOnDragOver}
                onDragLeaveCapture={this.handleOnDragLeaveCapture}
                onDrop={this.handleOnDrop}
                style={{ margin: 0, padding: 0 }}
              >
                <h1
                  id="drag-and-drop-indicator"
                  className="text-center"
                >
                  {'Drag and drop here'}
                </h1>
                {this.makeComponent(elements)}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default FormBuilder;
