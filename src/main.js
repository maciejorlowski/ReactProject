import React, {Component} from 'react';
import './home.css';
import './head.css';

import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import Home from "./home";
import Stuff from "./stuff";
import Contact from "./contact";

class Main extends Component {
    render() {
        return (
            <HashRouter>

                <div>
                    <div className="container head-bcg head-panel col-md-12 col-sm-12" id="header">
                        <div className="d-flex justify-content-center  col-md-offset-5">
                            <title className="title-gradient head-title ">Cinema</title>
                        </div>
                        <div className="row justify-content-md-center ">

                            <li><NavLink to="/">
                                <button className="btn btn-warning px-3">Home</button>
                            </NavLink></li>
                            <li><NavLink to="/stuff">
                                <button className="btn btn-warning px-3">Stuff</button>
                            </NavLink></li>
                            <li><NavLink to="/contact">
                                <button className="btn btn-warning px-3">Contact</button>
                            </NavLink></li>
                        </div>
                    </div>


                    <section id="aaa">
                        <Route exact path="/" component={Home}/>
                        <Route path="/stuff" component={Stuff}/>
                        <Route path="/contact" component={Contact}/>
                    </section>

                </div>

            </HashRouter>
        );
    }
}

export default Main;