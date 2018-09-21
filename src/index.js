import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Shelf from './components/Shelf';
import Row from './components/Row';
import Column from './components/Column';

ReactDOM.render(
  <Row>
    <Column size={4}>
      <Shelf
        title="StrongView Title"
        iconText="SV"
        featuredIconId="iconId"
        featuredBodyId="bodyId"
      >
        {'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
      </Shelf>
    </Column>
    <Column size={4}>
      <Shelf
        title="ListManager Title"
        iconText="LM"
        featuredIconId="iconId"
        featuredBodyId="bodyId"
      >
        {'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
      </Shelf>
    </Column>
    <Column size={4}>
      <Shelf
        title="NextMail Title"
        iconText="NM"
        featuredIconId="iconId"
        featuredBodyId="bodyId"
      >
        {'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
      </Shelf>
    </Column>
  </Row>,
  document.getElementById('root'),
);
registerServiceWorker();
