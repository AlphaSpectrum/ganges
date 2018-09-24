import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import Label from './components/Label';
import Input from './components/Input';
import Button from './components/Button';
import Textarea from './components/Textarea';
import Container from './components/Container';
import Row from './components/Row';
import Col from './components/Col';

ReactDOM.render(
  <Container>
    <Row>
      <Col size={5}>
        <Label htmlFor="exampleInput">
          {'Label'}
          <Input id="exampleInput" type="text" />
        </Label>
        <br/>
        <Button id="buttonExample">Submit</Button>
        <Textarea id="exampleTextArea" />
      </Col>
    </Row>
  </Container>,
  document.getElementById('root'),
);

registerServiceWorker();
