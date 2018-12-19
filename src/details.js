import React, {Component} from "react";
import './css/head.css';
import './css/App.css';
import './css/details.css';
import {Row} from "react-bootstrap";
import Col from "react-bootstrap/es/Col";
import {Button, ButtonToolbar,} from "react-bootstrap";
import MoviePhotos from "./MoviePhotos";
import {Link, NavLink} from "react-router-dom";
import PropTypes from 'prop-types';
import {update} from "./utils/localstorage";

class Details extends Component {


    constructor(props) {
        super(props);


        this.state = {
            movie: props.location.state.movie,
            showEdit: false,
            photos: props.location.state.movie.gallery,
            photosVisible: false,
            movieExsist: true
        };

        this.changeNumberOfAvailable=this.changeNumberOfAvailable.bind(this);


    }

    updateTitleName(newtitle) {
        this.state.movie.title = newtitle
    };

    toggleMoviePhotos = () => {

        if (this.state.photosVisible === true) {
            this.setState({photosVisible: false});
        } else {
            this.setState({photosVisible: true});
        }
    };

    open = (state, currentIndex) => {
        this.setState({[state]: true});
        this.setState({currentIndex});
    };

    changeNumberOfAvailable(show){
        let movie = Object.assign({}, this.state.movie);

        for (let i = 0; i <movie.shows.length ; i++) {
            if (movie.shows[i].id===show.id){
                movie.shows[i].unvailablePlaces++;
            }
        }

        this.setState({movie:movie});

        update(movie);
    }


    render() {


        return (
            <div className="details details-pos">

                    <div>
                        <Col md={5} mdOffset={4}>
                            {this.state.movie.title}
                            {this.state.movie.year}
                            {this.state.movie.link}

                        </Col>

                        <Link
                            className="link-text-color"
                            to={{
                                pathname: "/edit",
                                state: {
                                    movie: this.state.movie,
                                }
                            }}
                        >
                            <Button bsStyle="default">Edit</Button>
                        </Link>



                        <Col md={10} mdOffset={1}>

                            {this.state.movie.shows
                                .map(show =>
                                    <div key={show.id}>
                                        <p>Date : {show.date}
                                        {'  '}  Available places  :{show.availablePlaces}
                                        {'  '}  Unvailable places  : {show.unvailablePlaces} {'  '}
                                            {show.unvailablePlaces<show.availablePlaces ?  <Button bsStyle="success" onClick={()=>this.changeNumberOfAvailable(show)}> Buy ticket</Button> :
                                                <Button bsStyle="danger"> Buy ticket</Button>
                                            }
                                       </p>
                                    </div>
                                )}


                            <Button bsStyle="primary" onClick={this.toggleMoviePhotos}>
                                Show photos
                            </Button>
                            {this.state.photosVisible ? <MoviePhotos photos={this.state.photos}/> :
                                <div></div>
                            }

                        </Col>
                    </div>

            </div>

        );
    }
}


export default Details;

function movieValidator(props, propName) {

    if (props.location.state[propName]) {
        let value = props.location.state[propName];
        if (typeof value === 'object' && typeof value.id !== 'undefined' && typeof value.title !== 'undefined' && typeof value.year !== 'undefined') {
            console.log("adadada");
            if (value.id < 0) {
                return new Error("id of " + propName + " is wrong");
            } else if (value.title === "") {
                return new Error("title of " + propName + " is wrong");
            } else if (value.year === 0) {
                return new Error("year of " + propName + " is wrong");
            }
        }
    }

    return null;
}


function photosValidator(props) {
    console.log(props);

    let value = props.location.state.movie.gallery;
    if (typeof value === 'object' && typeof value.length !==  'undefined') {
        for (let i = 0; i <value.length ; i++) {
            if(typeof  value[i].id ==='undefined'){
                return new Error("Object of movie photos gallery dont have id field");
            }
        }
    }

    return null;
}


Details.propTypes = {
    movie: movieValidator,
    photos: photosValidator,
    movieExsist: PropTypes.bool,
    photosVisible: PropTypes.bool,
    showEdit: PropTypes.bool
};


