import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Shelf from './components/Shelf';

ReactDOM.render(<Shelf/>, document.getElementById('root'));
registerServiceWorker();
