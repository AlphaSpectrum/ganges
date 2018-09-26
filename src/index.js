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
import RangeSlider from './components/RangeSlider';


ReactDOM.render(
  <Container>
    <Row>
      <Col>
        <Label htmlFor="exampleRangeSlider">Range Slider</Label>
        <RangeSlider min={1} max={5} step={1} />
      </Col>
    </Row>
  </Container>,
  document.getElementById('root'),
);

registerServiceWorker();
