import React, { Component } from "react";
import Gallery from "react-photo-gallery";

class MoviePhotos extends Component {

    constructor(props){
        super(props);
        console.log("MoviePhotos props ");

        console.log(props);
        console.log(props.photos);

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
            <div >
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