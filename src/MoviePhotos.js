import React, { Component } from "react";
import Gallery from "react-photo-gallery";
import PropTypes from 'prop-types';
import Edit from "./Edit";

class MoviePhotos extends Component {

    constructor(props){
        super(props);

        this.state = {
            photos: props.photos,
        }

    }
    componentDidMount() {
        this.replacePhotosFormat(this.state.photos);

    }


    replacePhotosFormat = (moviePhotos) => {

        let result = [];
        for (let i = 0; i <moviePhotos.length ; i++) {

            let tmp={};
            tmp.src=moviePhotos[i].image;
            tmp.width=7;
            tmp.height= 7;
            result.push(tmp);
        }

        this.setState({photos :result});


    };

    render() {
        return (
            <div className="photo-div">
                <Gallery
                    photos={this.state.photos}
                    direction={"column"}
                    columns={3}
                />

            </div>
        );
    }
}

export default MoviePhotos;


MoviePhotos.propTypes = {
    photos: PropTypes.array
};
