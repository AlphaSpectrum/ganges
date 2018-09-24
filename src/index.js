import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/attributes.css';
import Label from './components/Label';
import Input from './components/Input';
import Button from './components/Button';
import Textarea from './components/Textarea';
import Container from './components/Container';
import Row from './components/Row';
import Col from './components/Col';
import Sidebar from './components/Sidebar';
import Block from './components/ElementBlock';


ReactDOM.render(
  <Container fluid>
    <Row>
      <Block />
    </Row>
  </Container>,
  document.getElementById('root'),
);

registerServiceWorker();
