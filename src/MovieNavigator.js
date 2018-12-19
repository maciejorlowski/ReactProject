import React, {Component} from "react";
import './css/head.css';
import './css/App.css';
import './css/home.css';
import { FormControl} from "react-bootstrap";
import Select from 'react-select';
import PropTypes from 'prop-types';



function MoviesListNavigator(props) {

    const options = [
        {label: 'Title', value: 1},
        {label: 'Year', value: 2},
        {label: 'Date', value: 3},
        {label: '-', value: 4},
    ];

    return (
        <div>
            <FormControl className="col-md-4" type="text" placeholder="Search"
                         onChange={(e) => {
                             props.filter(e.target.value)
                         }}/>

            <Select className="col-md-4 order-box"
                    value={props.orderField}
                    onChange={props.handelfunc}
                    options={options}
            />
        </div>
    )

}


export default MoviesListNavigator;

MoviesListNavigator.PropTypes = {
    orderField: PropTypes.object,
    handelfunc: PropTypes.func
};
