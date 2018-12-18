import React, {Component} from 'react';
import './css/home.css';
import './css/index.css';
import './css/head.css';
import {
    Route,
    BrowserRouter,
    NavLink
} from "react-router-dom";

import Home from "./home";
import Stuff from "./stuff";
import Contact from "./contact";
import Footer from "./Footer";
import axios from 'axios';


import {showLocalStorage,clearLocalStorage ,compareServerDataWithLocalStorage} from './utils/localstorage.js'

class Main extends Component {

    constructor(props) {
        super(props);

    }

    componentDidMount() {


    }

    render() {
        return (
            <BrowserRouter>

                <div>
                    <div className="container head-bcg head-panel col-md-12 col-sm-12 pos-static" id="header">
                        <div className="d-flex justify-content-center  col-md-offset-0">
                            <div className="title-gradient head-title" id="headTitle">Cinema</div>
                        </div>
                        <div className="row justify-content-md-center ">
                            <NavLink to="/">
                                <button className="btn btn-warning px-3">Home</button>
                            </NavLink>
                            <NavLink to="/stuff">
                                <button className="btn btn-warning px-3">Stuff</button>
                            </NavLink>
                            <NavLink to="/contact">
                                <button className="btn btn-warning px-3">Contact</button>
                            </NavLink>

                            <button className="btn btn-warning px-3" onClick={showLocalStorage}> Show local</button>

                            <button className="btn btn-warning px-3" onClick={clearLocalStorage}>Clear local</button>
                        </div>
                    </div>


                    <section id="section">
                        <Route path="/stuff" component={Stuff}/>
                        <Route path="/contact" component={Contact}/>
                        <Route exact path="/" render={() => <Home/>}/>
                    </section>
                    <Footer/>

                </div>
            </BrowserRouter>
        );
    }
}
// )
export default Main;

