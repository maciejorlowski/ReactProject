import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './head.css';
import * as serviceWorker from './serviceWorker';
import Main from "./main";
// import Head from "./head";


ReactDOM.render(<Main />, document.getElementById("root"));
// ReactDOM.render(<Head />, document.getElementsByTagName("header")[0]);



serviceWorker.unregister();
