import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Shelf from './components/Shelf';

ReactDOM.render(<Shelf title="Egestas sed sed risus pretium" maxWidth={550}>rem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Shelf>, document.getElementById('root'));
registerServiceWorker();
