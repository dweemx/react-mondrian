import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Composition from './components/Composition';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Composition 
        layout="2| . . 2- 2-"
        numRows={4}
        numColumns={2}>
        <div style={{backgroundColor: 'rgba(50, 255, 255, 0.8)'}}>
          1
        </div>
        <div style={{backgroundColor: 'rgba(255, 0, 255, 0.8)'}}>
          2
        </div>
        <div style={{backgroundColor: 'rgba(255, 50, 0, 0.8)'}}>
          3
        </div>
        <div style={{backgroundColor: 'rgba(50, 200, 50, 0.8)'}}>
          4
        </div>
        <div style={{backgroundColor: 'rgba(255, 165, 0, 0.8)'}}>
          5
        </div>
    </Composition>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
