import React, {Component} from 'react';
import './App.css';

const message = props => <div>{props.msg}</div>;

class Message extends Component {
    render() {
        return (
            <div>
                {message({msg: 'A Generic Hello World Text'})}
                {message({msg: 'Creating Reusable React Components'})}
            </div>
        );
    }
}

export default App;