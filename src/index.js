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
            <Shelf featuredIconId='iconId' featuredBodyId='bodyId'>Children</Shelf>
        </Column> <Column size={4}>
            <Shelf featuredIconId='iconId' featuredBodyId='bodyId'>Children</Shelf>
        </Column> <Column size={4}>
            <Shelf featuredIconId='iconId' featuredBodyId='bodyId'>Children</Shelf>
        </Column>
    </Row>,
    document.getElementById('root'),
);
registerServiceWorker();
