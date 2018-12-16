import React, { Component } from 'react';
// import logo from './logo.svg';
import './css/head.css';



class Head extends Component {
    render() {
        return (
            <div class="container head-bcg head-panel col-md-12 col-sm-12">
               <p class="text-justify">Cinema</p>

                <div class="row justify-content-md-center ">
                    <button class="btn btn-warning px-3">Przycisk 1</button>
                    <button class="btn btn-warning px-3">Przycisk 2</button>
                    <button class="btn btn-warning px-3">Przycisk 3</button>
                    <button class="btn btn-warning px-3">Przycisk 4</button>
                </div>
            </div>
        );
    }
}

export default Head;

