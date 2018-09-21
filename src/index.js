import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Label from './components/Label';
import Input from './components/Input';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <Label htmlFor={'exampleInput'}>
  Test
  <Input id='exampleInput' />
  </Label>,
  document.getElementById('root'),
);
registerServiceWorker();
