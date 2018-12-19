import React, {Component} from "react";
import './css/head.css';
import './css/App.css';
import './css/home.css';
import PropTypes from 'prop-types';
import MoviesListNavigator from "./MovieNavigator";


function OriginalMovie(props) {

    console.log(props);

    return (<div>
        {props.movie.title}
        {props.movie.year}
        {props.movie.description}

        {props.movie.shows
            .map(show =>
                <div key={show.id}>
                    <p>{show.date}</p>
                    <p>{show.unvailablePlaces} </p>
                    <p>{show.availablePlaces} </p>
                </div>
            )}


        {props.movie.gallery
            .map(photo =>
                <div key={photo.id}>
                    <p>{photo.image} </p>
                </div>
            )}
    </div>)
}

export default OriginalMovie;

OriginalMovie.PropTypes = {
    movie: PropTypes.object,
};
