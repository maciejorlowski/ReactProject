import React, {Component} from "react";
import './css/head.css';
import './css/App.css';
import './css/details.css';
import { Row} from "react-bootstrap";
import Col from "react-bootstrap/es/Col";


class Details extends Component {


    constructor(props) {
        super(props);

        console.log("Detail constructor ");
        console.log("Details props ");
        console.log(props);
        console.log(props.item);

        this.state ={
            movie : props.item
        }
    }

    componentDidMount() {

    }


    render() {
        return (
            <div className="details details-pos">

                <Row >
                    <Col md={6} mdOffset={3}>
                        {this.state.movie.id}
                        {this.state.movie.title}
                        {this.state.movie.year}
                        {this.state.movie.link}


                        {this.state.movie.shows
                            .map(show =>
                            <div>
                                {show.date}
                                {show.unvailablePlaces}
                                {show.availablePlaces}
                                {"  "}
                            </div>

                            )}
                        {this.state.movie.gallery
                            .map(item =>
                                <img className="movie-photo" src={item.image}  />


                            )}
                    </Col>
                </Row>

            </div>

        );
    }
}


export default Details;