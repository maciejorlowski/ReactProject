import React, { Component } from "react";

class Contact extends Component {

    constructor(props){
        super(props);

        console.log("Contactstop COMPONENT");

    }


    render() {
        return (
            <div>
                <h2>GOT QUESTIONS?</h2>
                <p>The easiest thing to do is post on
                    our <a href="http://forum.kirupa.com">forums</a>.
                </p>
            </div>
        );
    }
}

export default Contact;