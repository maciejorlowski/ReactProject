import React, {Component} from "react";
import './css/head.css';
import './css/App.css';
import './css/details.css';
import {Row} from "react-bootstrap";
import Col from "react-bootstrap/es/Col";
import {Button, ButtonToolbar,} from "react-bootstrap";
import MoviePhotos from "./MoviePhotos";


class Details extends Component {


    constructor(props) {
        super(props);

        console.log("Detail constructor ");
        console.log("Details props ");
        console.log(props);
        console.log(props.item);

        this.state = {
            movie: props.item,
            showEdit: false,
            photos: props.item.gallery,
            photosVisible: false
        }


    }


    componentDidMount() {
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

    render() {
        return (
            <div className="details details-pos">

                <Col md={5} mdOffset={4}>
                    {this.state.movie.title}
                    {this.state.movie.year}
                    {this.state.movie.link}

                </Col>


                <ButtonToolbar>
                    <Button bsStyle="default" onClick={(event) => this.open("showEdit", this.state.movie.id)}>Edit
                        Recipe</Button>
                </ButtonToolbar>

                <Col md={10} mdOffset={1}>

                    {this.state.movie.shows
                        .map(show =>
                            <div key={show.id}>

                                <p> {show.date}</p>
                                <p>{show.unvailablePlaces} </p>
                                <p>{show.availablePlaces} </p>

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

        );
    }
}


export default Details;


{/*<Modal show={this.state.showEdit} onHide={this.close}>*/
}
{/*<Modal.Header closeButton>*/
}
{/*<Modal.Title>Edit Recipe</Modal.Title>*/
}
{/*</Modal.Header>*/
}

{/*<Modal.Body>*/
}
{/*<FormGroup controlId="formBasicText">*/
}
{/*<ControlLabel>Movie Title</ControlLabel>*/
}
{/*<FormControl*/
}
{/*type="text"*/
}
{/*placeholder="Enter text"*/
}
{/*onChange={(event) => this.updateTitleName(event.target.value)}*/
}
{/*value={this.state.movie.title}>*/
}
{/*</FormControl>*/
}
{/*</FormGroup>*/
}
{/*/!*<FormGroup controlId="formControlTextarea">*!/*/
}
{/*/!*<ControlLabel>Ingredients</ControlLabel>*!/*/
}
{/*/!*<FormControl*!/*/
}
{/*/!*componentClass="textarea"*!/*/
}
{/*/!*onChange={(event) => this.updateIngredients(event.target.value.split(","), currentIndex)}*!/*/
}
{/*/!*placeholder="Enter Ingredients (Seperate by Columns)"*!/*/
}
{/*/!*value={recipes[currentIndex].ingredients}>*!/*/
}
{/*/!*</FormControl>*!/*/
}
{/*/!*</FormGroup>*!/*/
}
{/*</Modal.Body>*/
}
{/*<Modal.Footer>*/
}
{/*<Button bsStyle="primary" onClick={this.close}> Close</Button>*/
}
{/*</Modal.Footer>*/
}

{/*</Modal>*/
}
