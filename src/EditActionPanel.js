import ActionMessage from "./ActionMessage";
import React, {Component} from "react";
import './css/head.css';
import './css/App.css';
import './css/home.css';
import PropTypes from 'prop-types';
import Edit from "./Edit";
import MoviesListNavigator from "./MovieNavigator";


function EditActionPanel(props) {

    const removeMessage = "Czy jestes pewny ze chcesz usunac ten film ?";
    const saveMessage = "Czy jestes pewny ze chcesz dokonca trwalych zmian tego filmu ?";

    return (
        <div>
            <button onClick={props.changeRemoveActionState}>Remove Movie</button>
            <button onClick={props.changeUpdateActionState}>Save Movie</button>

            {props.updateActionMessage &&
            <ActionMessage func={props.updateActionObserver} cancelfunc={props.updateActionCancel}
                           message={saveMessage}/>}
            {props.removeActionMessage &&
            <ActionMessage func={props.removeActionObserver} cancelfunc={props.removeActionCancel}
                           message={removeMessage}/>}


        </div>
    )
}



export default EditActionPanel;

EditActionPanel.propTypes = {
    changeRemoveActionState: PropTypes.func,
    changeUpdateActionState: PropTypes.func,
    updateActionObserver: PropTypes.func,
    updateActionCancel: PropTypes.func,
    removeActionObserver: PropTypes.func,
    removeActionCancel: PropTypes.func,
    updateActionMessage: PropTypes.bool,
    removeActionMessage: PropTypes.bool,
};