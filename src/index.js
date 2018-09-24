import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Label from './components/Label';
import Input from './components/Input';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <div>
    <Label htmlFor="exampleInput">
      {'Label'}
      <Input id="exampleInput" type="text" />
    </Label>
  </div>,
  document.getElementById('root'),
);
registerServiceWorker();
