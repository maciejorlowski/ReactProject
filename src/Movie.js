import React, {Component} from "react";
import './css/head.css';
import './css/App.css';
import './css/home.css';
import { Row} from "react-bootstrap";
import Col from "react-bootstrap/es/Col";
import PropTypes from 'prop-types';
function Movie(props) {

    return (<Row onClick={(e) => {
            props.details(e, props.id)
        }}>
            <Col className="list-item item-color" md={6} mdOffset={3}>
                <div>
                    <div>
                        <div>
                            <div className="text-center">
                                <div
                                >{props.title}{" "}{props.year}</div>
                            </div>
                        </div>
                    </div>
                    <div>
                        {props.description}
                        <a href={props.link}> link</a>
                    </div>
                </div>
            </Col>

        </Row>
    )
}

export default Movie;


Movie.propTypes = {
    details: PropTypes.func,
    id: PropTypes.number,
    title: PropTypes.string,
    year: PropTypes.number,
    description: PropTypes.string,
    link: PropTypes.string
};
