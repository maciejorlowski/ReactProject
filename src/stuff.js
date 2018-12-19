import React, { Component } from "react";
import './css/stuff.css';


class Stuff extends Component {

    constructor(props,list){
        super(props);

    }


    render() {
        return (
            <div className="details stuff-pos">


                <h2>STUFF</h2>
                <p>Mauris sem velit, vehicula eget sodales vitae,
                    rhoncus eget sapien:</p>
                <ol>
                    <li>Nulla pulvinar diam</li>
                    <li>Facilisis bibendum</li>
                    <li>Vestibulum vulputate</li>
                    <li>Eget erat</li>
                    <li>Id porttitor</li>
                </ol>
            </div>
        );
    }
}

export default Stuff;