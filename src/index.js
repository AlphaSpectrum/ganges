import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/attributes.css';
import 'animate.css';
import FormBuilder from './components/FormBuilder';

ReactDOM.render(
  <FormBuilder />, document.getElementById('root'),
);

registerServiceWorker();
