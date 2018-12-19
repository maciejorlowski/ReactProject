import React, {Component} from "react";
import ActionMessage from "./ActionMessage";
import {remove, update} from "./utils/localstorage";
import Details from "./details";
import PropTypes from 'prop-types';
import OriginalMovie from "./OriginalMovie";
import MovieActionPanel from "./EditActionPanel";


class Edit extends Component {

    constructor(props) {
        super(props);

        console.log("               Edit view    props           !!!! ");
        console.log(props);
        console.log("  ");
        console.log(this.props.history);


        this.state = {
            editMovie: props.location.state.movie,
            originalMovie: props.location.state.movie,
            newImage: '',
            removeActionMessage: false,
            updateActionMessage: false,
            newShow: {}
        };

        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleChangeYear = this.handleChangeYear.bind(this);
        this.handleChangeDescription = this.handleChangeDescription.bind(this);
        this.removeSelectedImage = this.removeSelectedImage.bind(this);
        this.handleBlurImageUrl = this.handleBlurImageUrl.bind(this);
        this.handleChangeAvailablePlaces = this.handleChangeAvailablePlaces.bind(this);
        this.addImage = this.addImage.bind(this);
        this.removeActionObserver = this.removeActionObserver.bind(this);
        this.changeRemoveActionState = this.changeRemoveActionState.bind(this);
        this.changeUpdateActionState = this.changeUpdateActionState.bind(this);

        this.updateMovie = this.updateMovie.bind(this);
        this.removeMovie = this.removeMovie.bind(this);
        this.updateActionCancel = this.updateActionCancel.bind(this);
        this.removeActionCancel = this.removeActionCancel.bind(this);

        this.updateActionObserver = this.updateActionObserver.bind(this);

        this.handleBlurShowDate = this.handleBlurShowDate.bind(this);
        this.handleBlurShowAvailablePlaces = this.handleBlurShowAvailablePlaces.bind(this);
        this.addShow = this.addShow.bind(this);

    }

    addShow() {
        let now = new Date().valueOf();
        let date =  Date.parse(this.state.newShow.date);
        let movie = Object.assign({}, this.state.editMovie);

        if (this.state.newShow.availablePlaces>10 && now < date) {
            let tmpMax = -1;
            for (let i = 0; i < movie.shows.length; i++) {
                if (movie.shows[i].id > tmpMax) {
                    tmpMax = movie.shows[i].id;
                }
            }
            tmpMax++;
            let show = Object.assign({}, this.state.newShow);
            show.id = tmpMax;
            show.unvailablePlaces = 0;
            movie.shows.push(show);

            this.setState({editMovie: movie});

        }else {
            let tmp ={};
            this.setState( {newShow: tmp});
        }
    }

    handleBlurShowDate(e) {
        let newShow = Object.assign({}, this.state.newShow);
        newShow.date = e.target.value;
        this.setState({newShow: newShow});
    }


    handleBlurShowAvailablePlaces(e) {

            let newShow = Object.assign({}, this.state.newShow);
            newShow.availablePlaces = e.target.value;
            this.setState({newShow: newShow});

    }


    handleChangeYear(e) {
        if (e.target.value >= 1910 && e.target.value < ((new Date()).getFullYear() + 20)) {
            console.log(e.target.value);
            let editMovie = Object.assign({}, this.state.editMovie);
            editMovie.year = e.target.value;
            this.setState({editMovie: editMovie});
        }
    }

    handleChangeTitle(e) {
        if (e.target.value.match("^[a-zA-Z ]*$") != null && e.target.value.length < 45) {
            let editMovie = Object.assign({}, this.state.editMovie);
            editMovie.title = e.target.value;
            this.setState({editMovie: editMovie});
        }
    }


    handleChangeDescription(e) {
        var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|<>\/?]/;
        if (!format.test(e.target.value) && e.target.value.length < 500) {
            let editMovie = Object.assign({}, this.state.editMovie);
            editMovie.description = e.target.value;
            this.setState({editMovie: editMovie});
        }
    }


    handleChangeAvailablePlaces(e, show) {

        let editShow = show;

        if (editShow.unvailablePlaces < e.target.value) {
            editShow.availablePlaces = e.target.value;

            let editMovie = Object.assign({}, this.state.editMovie);

            let shows = editMovie.shows;
            for (let i = 0; i < shows.length; i++) {
                if (shows[i].id === editShow.id) {
                    shows[i] = editShow;
                    break;
                }
            }

            editMovie.shows = shows;

            this.setState({editMovie: editMovie});
        }

    }

    handleBlurImageUrl(e) {
        var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/

        if ((e.target.value.match(/\.(jpeg|jpg|gif|png)$/) != null) && regexp.test(e.target.value)) {
            this.setState({newImage: e.target.value});
        } else {
            this.setState({newImage: ""});
        }

    }

    addImage(e) {

        if (this.state.newImage !== "") {
            let shows = this.state.editMovie.gallery;
            let last = shows[shows.length - 1].id;
            last++;

            let image = {};
            image.id = last;
            image.image = this.state.newImage;
            shows.push(image);

            let editMovie = Object.assign({}, this.state.editMovie);
            editMovie.shows = shows;
            this.setState({editMovie: editMovie});

            this.setState({newImage: ""});
        }

    }

    removeSelectedImage(photo, e) {

        let id = photo.id;
        let shows = this.state.editMovie.gallery;

        for (let i = 0; i < shows.length; i++) {
            if (shows[i].id === id) {
                shows[i].image = e.target.value;
                shows.splice(i, 1);
                break;
            }
        }

        let editMovie = Object.assign({}, this.state.editMovie);
        editMovie.shows = shows;
        this.setState({editMovie: editMovie});

    }

    changeRemoveActionState() {


        console.log("state was chage ");
        if (this.state.removeActionMessage === false) {
            console.log("true");
            this.setState({removeActionMessage: true});
        } else {
            console.log("false");
            // this.setState({removeActionMessage:false});
        }
    }


    changeUpdateActionState() {


        console.log("state was chage ");
        if (this.state.updateActionMessage === false) {
            console.log("true");
            this.setState({updateActionMessage: true});
        } else {
            console.log("false");
        }
    }

    removeActionObserver() {
        this.setState({removeActionMessage: false});
        this.removeMovie();
    }

    removeActionCancel() {
        this.setState({removeActionMessage: false});
    }

    updateActionCancel() {
        this.setState({updateActionMessage: false});
    }

    updateActionObserver() {
        this.setState({updateActionMessage: false});
        this.updateMovie();
    }


    removeMovie() {
        remove(this.state.editMovie);
        //TODO
    }


    updateMovie() {
        update(this.state.editMovie);
        //TODO
    }

    render() {


        return (
            <div>

                <MovieActionPanel changeRemoveActionState={this.changeRemoveActionState}
                                  changeUpdateActionState={this.changeUpdateActionState}
                                  updateActionMessage={this.state.updateActionMessage}
                                  removeActionMessage={this.state.removeActionMessage}
                                  updateActionObserver={this.updateActionObserver}
                                  updateActionCancel={this.updateActionCancel}
                                  removeActionObserver={this.removeActionObserver}
                                  removeActionCancel={this.removeActionCancel}

                />

                <OriginalMovie movie={this.props.location.state.movie}/>


                <input type="text" value={this.state.editMovie.title} onChange={this.handleChangeTitle}
                       placeholder="Title" className="form-control"/>
                <input type="number" value={this.state.editMovie.year} onChange={this.handleChangeYear}
                       placeholder="Year"/>
                <input type="text" value={this.state.editMovie.description} onChange={this.handleChangeDescription}
                       placeholder="Description" className="form-control"/>

                {this.state.editMovie.shows
                    .map(show =>
                        <div key={show.id}>
                            <input type="number" onChange={(e) => this.handleChangeAvailablePlaces(e, show)}
                                   value={show.availablePlaces}/>
                        </div>
                    )}

                {this.state.editMovie.gallery
                    .map(photo =>
                        <div key={photo.id}>
                            <div>
                                <div>{photo.image}</div>
                                <button onClick={(e) => this.removeSelectedImage(photo, e)}>Delete</button>
                            </div>
                        </div>
                    )}

                <div>
                    <input type="url" placeholder="image url" onBlur={this.handleBlurImageUrl}
                           className="form-control"/>
                    <button onClick={this.addImage}>Add image</button>
                </div>


                <div>
                    <input type="datetime-local" placeholder="Show date" onBlur={this.handleBlurShowDate}/>
                    <input type="number" placeholder="AvailablePlaces" className="form-control"
                           onBlur={this.handleBlurShowAvailablePlaces}/>
                    <button onClick={this.addShow}>Add show</button>
                </div>


            </div>
        );
    }
}


export default Edit;


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


Edit.propTypes = {
    originalMovie: movieValidator,
    editMovie: movieValidator,
    newImage: PropTypes.string,
    removeActionMessage: PropTypes.bool,
    saveActionMessage: PropTypes.bool,
    newShow: PropTypes.object,
};


