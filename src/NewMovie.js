import React, { Component } from 'react';
import {remove, save, update} from "./utils/localstorage";
import './css/newMovie.css';
import OriginalMovie from "./OriginalMovie";

class NewMovie extends Component {

    constructor(props){
        super(props);

        let tmp = {
            "id":0,
            "title":"",
            "year":0,
            "link":"",
            "description":"",
            "shows":[{"if":0,"date":0 ,"availablePlaces":0,"unvailablePlaces":0}],
            "gallery":[{"id":0 ,"image":""}]
        };


        this.state = {
            movie: tmp,
            newShow: {},
            newImage: '',
        }



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


    saveMovie(){
        save(this.state.movie);
    }


    addShow() {
        let now = new Date().valueOf();
        let date =  Date.parse(this.state.newShow.date);
        let movie = Object.assign({}, this.state.movie);

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

            this.setState({movie: movie});

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
            let movie = Object.assign({}, this.state.movie);
            movie.year = e.target.value;
            this.setState({movie: movie});
        }
    }

    handleChangeTitle(e) {
        if (e.target.value.match("^[a-zA-Z ]*$") != null && e.target.value.length < 45) {
            let movie = Object.assign({}, this.state.movie);
            movie.title = e.target.value;
            this.setState({movie: movie});
        }
    }


    handleChangeDescription(e) {
        var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|<>\/?]/;
        if (!format.test(e.target.value) && e.target.value.length < 500) {
            let movie = Object.assign({}, this.state.movie);
            movie.description = e.target.value;
            this.setState({movie: movie});
        }
    }


    handleChangeAvailablePlaces(e, show) {

        let editShow = show;

        if (editShow.unvailablePlaces < e.target.value) {
            editShow.availablePlaces = e.target.value;

            let movie = Object.assign({}, this.state.movie);

            let shows = movie.shows;
            for (let i = 0; i < shows.length; i++) {
                if (shows[i].id === editShow.id) {
                    shows[i] = editShow;
                    break;
                }
            }

            movie.shows = shows;

            this.setState({movie: movie});
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
            let shows = this.state.movie.gallery;
            let last = shows[shows.length - 1].id;
            last++;

            let image = {};
            image.id = last;
            image.image = this.state.newImage;
            shows.push(image);

            let movie = Object.assign({}, this.state.movie);
            movie.shows = shows;
            this.setState({movie: movie});

            this.setState({newImage: ""});
        }

    }

    removeSelectedImage(photo, e) {

        let id = photo.id;
        let shows = this.state.movie.gallery;

        for (let i = 0; i < shows.length; i++) {
            if (shows[i].id === id) {
                shows[i].image = e.target.value;
                shows.splice(i, 1);
                break;
            }
        }

        let movie = Object.assign({}, this.state.movie);
        movie.shows = shows;
        this.setState({movie: movie});

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
        remove(this.state.movie);
        //TODO
    }


    updateMovie() {
        update(this.state.movie);
        //TODO
    }


    render() {
        return (
            <div className="newMovie newMovie-pos">


                <button  style={{backgroundColor:'lightblue'}} onClick={this.saveMovie}>Save</button>

                <input style={{backgroundColor:'lightblue'}} type="text" value={this.state.movie.title} onChange={this.handleChangeTitle}
                       placeholder="Title" className="form-control"/>
                <input style={{backgroundColor:'lightblue'}} type="number" value={this.state.movie.year} onChange={this.handleChangeYear}
                       placeholder="Year"/>
                <input style={{backgroundColor:'lightblue'}} type="text" value={this.state.movie.description} onChange={this.handleChangeDescription}
                       placeholder="Description" className="form-control"/>

                {this.state.movie.shows
                    .map(show =>
                        <div key={show.id}>
                            <input style={{backgroundColor:'lightblue'}} type="number" onChange={(e) => this.handleChangeAvailablePlaces(e, show)}
                                   value={show.availablePlaces}/>
                        </div>
                    )}

                {this.state.movie.gallery
                    .map(photo =>
                        <div key={photo.id}>
                            <div>
                                <div>{photo.image}</div>
                                <button style={{backgroundColor:'lightblue'}} onClick={(e) => this.removeSelectedImage(photo, e)}>Delete</button>
                            </div>
                        </div>
                    )}

                <div>
                    <input style={{backgroundColor:'lightblue'}} type="url" placeholder="image url" onBlur={this.handleBlurImageUrl}
                           className="form-control"/>
                    <button style={{backgroundColor:'lightblue'}} onClick={this.addImage}>Add image</button>
                </div>


                <div>
                    <input style={{backgroundColor:'lightblue'}} type="datetime-local" placeholder="Show date" onBlur={this.handleBlurShowDate}/>
                    <input style={{backgroundColor:'lightblue'}} type="number" placeholder="AvailablePlaces" className="form-control"
                           onBlur={this.handleBlurShowAvailablePlaces}/>
                    <button style={{backgroundColor:'lightblue'}} onClick={this.addShow}>Add show</button>
                </div>



            </div>
        );
    }
}

export default NewMovie;
