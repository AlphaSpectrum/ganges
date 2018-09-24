import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import Label from './components/Label';
import Input from './components/Input';
import Button from './components/Button';
import Textarea from './components/Textarea';

ReactDOM.render(
  <div>
    <Label htmlFor="exampleInput">
      {'Label'}
      <Input id="exampleInput" type="text" />
    </Label>
    <Button id='buttonExample'>Submit</Button>
    <Textarea id='exampleTextArea'/>
  </div>,
  document.getElementById('root'),
);

registerServiceWorker();
