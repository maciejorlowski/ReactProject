import React, { Component } from "react";

class Stuff extends Component {

    constructor(props,list){
        super(props);
        console.log(" ");
        console.log(" ");
        console.log(props);
        console.log(list);

        // this.state={
        //     selectedId :  -1,
        //     movie : {}
        // };
        // if (this.state)
        // this.state={
        // };

        // if (props.match !== undefined){
        //     console.log(props.match);
        //     console.log(props.match.params);
        //     console.log(props.match.params.movieID);
        //     this.state.selectedId=props.match.params.movieID;
        //     console.log(this.state.selectedId);
        // }
        // else if (props.match === undefined){
        //     console.log(props.list);
        //     console.log(this.state.selectedId);
        //     console.log(props.list[this.state.selectedId]);
        // }

    }


    render() {
        return (
            <div class="stuffDiv">

                {/*<h3>ID: {this.match.params.movieID}</h3>*/}
                {/*<h3>ID: {this.state.selectedId}</h3>*/}

                <h2>STUFF</h2>
                <p>Mauris sem velit, vehicula eget sodales vitae,
                    rhoncus eget sapien:</p>
                <ol>
                    <li>Nulla pulvinar diam</li>
                    <li>Facilisis bibendum</li>
                    <li>Vestibulum vulputate</li>
                    <li>Eget erat</li>
                    <li>Id porttitor</li>
                </ol>
            </div>
        );
    }
}

export default Stuff;