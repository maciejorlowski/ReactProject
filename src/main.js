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
import Edit from "./Edit";
import Details from "./details";
import NewMovie from "./NewMovie";
import Head from "./head";

class Main extends Component {

    constructor(props) {
        super(props);

        this.state = {
            navigate : [],
            title : "Cinema",
        }

    }

    componentDidMount() {

      let result =[];

      result.push({"url":"/home" , "name" : "Home"});
      result.push({"url":"/stuff", "name" : "Stuff"});
      result.push({"url":"/new-movie", "name" : "New movie"});
      result.push({"url":"/contact", "name" : "Contact" });

      this.state.navigate =result;
    }

    render() {
        return (
            <BrowserRouter>

                <div class="underRoot">

                    <Head navigate={this.state.navigate} />

                    <section id="section">
                        <Route path="/stuff" component={Stuff}/>
                        <Route path="/new-movie" component={NewMovie}/>
                        <Route path="/contact" component={Contact}/>
                        <Route exact path="/" render={() => <Home/>}/>
                        <Route  path="/edit" component={Edit} />
                        <Route  path="/details" component={Details} />
                    </section>

                    <Footer/>

                </div>
            </BrowserRouter>
        );
    }
}
// )
export default Main;

