import PanelFooter from "react-bootstrap/es/PanelFooter";
import React, {Component} from 'react';
import './css/head.css';
import Details from "./details";
import PropTypes from 'prop-types';

class ActionMessage extends Component {

    constructor(props) {
        super(props);


        console.log(props);
    }


    render() {
        return (

            <div>

                <div>{this.props.message}</div>


                <button onClick={this.props.func}> Ok </button>
                <button onClick={this.props.cancelfunc}> Cancel </button>

            </div>

        );
    }
}

export default ActionMessage;


function messageValidator(props) {

    console.log(props);
    var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|<>\/]/;
    if (typeof props.message !=='string')  {
        return new Error("Message props have wrong type");
    }
    else if (format.test(props.message) ) {
        return new Error("Mesage body contains prohibited special characters");
    }else if( props.message > 250){
        return new Error("Mesage body is to large");
    }


    return null;
}

function messageConnectionFunction(props) {

    if (typeof props.func !=='function')  {
        return new Error("Funtion passed to props have wrong type");
    }

    return null;
}



ActionMessage.propTypes = {
    message: messageValidator,
    func: messageConnectionFunction,
    cancelfunc: messageConnectionFunction,
};
