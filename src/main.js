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
import axios from 'axios';

class Main extends Component {

    state = {
        posts: []
    };

    // movies=[];

    constructor() {
        super();
        // this.state = {
        //     moviesList : this.movies,
        //     data: null
        // };


    }

    componentDidMount() {

        axios.get(`https://api.myjson.com/bins/bba2s`)
            .then(res => {
                const posts = res.data;
                this.setState({ posts });
            });
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
                            <NavLink to="/" >
                                <button className="btn btn-warning px-3">Home</button>
                            </NavLink>
                            <NavLink to="/stuff">
                                <button className="btn btn-warning px-3">Stuff</button>
                            </NavLink>
                            <NavLink to="/contact">
                                <button className="btn btn-warning px-3">Contact</button>
                            </NavLink>
                        </div>
                    </div>

                    <ul>
                        {this.state.posts.map(post =>
                            <li key={post.id}> {post.title} {post.year}</li>
                        )}
                    </ul>
                    {/*<header/>*/}



                    <section id="aaa">
                        <Route path="/" component={Home}/>
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

