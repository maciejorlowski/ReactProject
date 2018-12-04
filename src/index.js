import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './head.css';
import * as serviceWorker from './serviceWorker';
import Head from "./head";


// ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<Hello />, document.getElementById('root'));
ReactDOM.render(<Head />, document.getElementsByTagName('HEADER')[0]);



serviceWorker.unregister();
