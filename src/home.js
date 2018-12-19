import React, {Component} from "react";
import './css/head.css';
import './css/App.css';
import './css/home.css';
import {Row} from "react-bootstrap";
import Col from "react-bootstrap/es/Col";
import axios from "axios";
import {compareServerDataWithLocalStorage} from "./utils/localstorage";
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';
import Movie from "./Movie";
import MoviesListNavigator from "./MovieNavigator";


class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            movies: [],
            moviesCopy: [],
            showResults: false,
            selected: {},
            searchPhrase: '',
            orderField: {}
        };


        this.handleMultiChange = this.handleMultiChange.bind(this);
    }

    handleMultiChange(option) {
        this.setState(state => {
            return {
                multiValue: option
            };
        });
    }

    componentDidMount() {

        axios.get(`https://api.myjson.com/bins/hgxbk`)
            .then(res => {
                var movies = res.data;
                movies = compareServerDataWithLocalStorage(movies);
                console.log("Home Component data load to state");
                this.setState({movies: movies});
                this.setState({moviesCopy: movies});
            });
    }

    showDetails = (e, movieId) => {
        let selected = this.state.movies[movieId];
        this.setState({selected: selected});
        this.setState({showResults: true});
    };

    filterList = (value) => {
        this.setState({
            movies: this.state.moviesCopy,
            searchPhrase: value
        });
        if (value !== "") {
            let movies = this.state.movies;
            movies = movies.filter((mov) => {
                let poetName = mov.title.toLowerCase();
                return poetName.indexOf(
                    value.toLowerCase()) !== -1
            });
            this.setState({
                movies
            })
        }


    };
    parseISOLocal = (s) => {
        var b = s.split(/\D/);
        return new Date(b[0], b[1] - 1, b[2], b[3], b[4], b[5]);
    };


    order = (a, b, field) => {
        if (field === '-') {
            this.state.movies = this.state.moviesCopy;
        } else if (field === "Title") {
            if (a.title < b.title) {
                return -1;
            }
            if (a.title > b.title) {
                return 1;
            }
            return 0;
        } else if (field === "Year") {
            return a.year - b.year;
        } else if (field === "Date") {

            let now = new Date().valueOf();

            let shows1 = a.shows;
            let dates1 = [];
            let min1 = 0;
            for (let i = 0; i < shows1.length; i++) {
                dates1.push((this.parseISOLocal(shows1[i].date).valueOf() - now));
                if (min1 > dates1[dates1.length - 1]) {
                    min1 = dates1[dates1.length - 1];
                }
            }

            let shows2 = b.shows;
            let dates2 = [];
            let min2 = 0;
            for (let i = 0; i < shows2.length; i++) {
                dates2.push((this.parseISOLocal(shows2[i].date).valueOf() - now));
                if (min2 > dates2[dates2.length - 1]) {
                    min2 = dates2[dates2.length - 1];
                }
            }

            return min1 - min2;
        }
    };

    orderByFields = (a, b) => {
        return this.order(a, b, this.state.orderField.label);
    };

    handleOrderFieldChange = (orderField) => {
        this.setState({orderField});
    };

    render() {


        return (
            <div className="home home-pos">

                <div id="movies-list">
                    <div className="home-body">
                        <Row className="search-bar">
                            <Col md={6} mdOffset={3}>

                                <MoviesListNavigator orderField={this.state.orderField}
                                                     handelfunc={this.handleOrderFieldChange}
                                                     filter={this.filterList}/>

                            </Col>
                        </Row>{' '}
                    </div>


                    {this.state.movies
                        .sort((a, b) => this.orderByFields(a, b))
                        .map(movie =>

                            <Link key={movie.id}
                                  className="link-text-color"
                                  to={{
                                      pathname: "/details",
                                      state: {movie: movie}
                                  }}>
                                <Movie id={movie.id} title={movie.title} year={movie.year} link={movie.link}
                                       description={movie.description} details={this.showDetails}/>

                            </Link>
                        )}
                </div>

            </div>
        );

    }

}

export default Home;


Home.propTypes = {
    movies: PropTypes.array,
    moviesCopy: PropTypes.array,
    showResults: PropTypes.bool,
    searchPhrase: PropTypes.string,
    orderField: PropTypes.object,
};





