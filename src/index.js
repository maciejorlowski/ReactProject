import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import './css/head.css';
import * as serviceWorker from './serviceWorker';
import Main from "./main";


ReactDOM.render(<Main />, document.getElementById("root"));
// ReactDOM.render(<Head />, document.getElementsByTagName("header")[0]);



serviceWorker.unregister();
