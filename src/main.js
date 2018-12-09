import React, {Component} from 'react';
import './home.css';
import './index.css';
import './head.css';
import {
    Route,
    HashRouter,
    BrowserRouter,
    Link,
    NavLink
} from "react-router-dom";


import {Nav, Navbar, NavItem, PageHeader, FormGroup, FormControl, Button} from "react-bootstrap";

import Home from "./home";
import Stuff from "./stuff";
import Contact from "./contact";
import PanelFooter from "react-bootstrap/es/PanelFooter";
import Footer from "./Footer";


class Main extends Component {
    render() {
        return (
            <BrowserRouter>

                <div>

                    <header/>

                    <section id="aaa">
                        <Route exact path="/" component={Home}/>
                        <Route path="/stuff" component={Stuff}/>
                        <Route path="/contact" component={Contact}/>
                    </section>

                    <Footer/>

                </div>

            </BrowserRouter>


        );
    }
}

export default Main;

