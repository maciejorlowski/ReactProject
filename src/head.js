import React, {Component} from 'react';
// import logo from './logo.svg';
import './css/head.css';
import {NavLink} from "react-router-dom";
import {clearLocalStorage, showLocalStorage} from "./utils/localstorage";


class Head extends Component {

    constructor(props) {
        super(props);


        // this.state = {
        //     navigate : props.
        // }

    }


    render() {


        return (


            <div className="container head-bcg head-panel col-md-12 col-sm-12 pos-static" id="header">
                <PageTitle/>
                <div className="row justify-content-md-center ">
                    <PageNavbar/>
                </div>
            </div>


        );
    }
}

export default Head;


function PageTitle() {

    return (<div className="d-flex justify-content-center  col-md-offset-0">
            <div className="title-gradient head-title" id="headTitle">Cinema</div>
        </div>
    )
}


function PageNavbar() {

    return (
        <div>
            <NavLink to="/">
                <button className="btn btn-warning px-3">Home</button>
            </NavLink>
            <NavLink to="/stuff">
                <button className="btn btn-warning px-3">Stuff</button>
            </NavLink>
            <NavLink to="/new-movie">
                <button className="btn btn-warning px-3">New Movie</button>
            </NavLink>
            <NavLink to="/contact">
                <button className="btn btn-warning px-3">Contact</button>
            </NavLink>

            <button className="btn btn-warning px-3" onClick={showLocalStorage}> Show local</button>

            <button className="btn btn-warning px-3" onClick={clearLocalStorage}>Clear local</button>
        </div>
    )

}