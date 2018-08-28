import React, { Component } from 'react';
import {updateResults} from "./actions/index"
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

class SearchLocation extends Component {

    componentDidMount() {
        console.log("Fetching initial dataset!");

        //Replace the call with a request for a close proximity dataset woop
        const axios = require('axios');
        // Make a request for a user with a given ID
        axios.get('https://triagetest-1.firebaseio.com/.json')
        .then(function (response) {
            // handle success
            console.log(response.data)
            this.props.updateResults(response.data);
        }.bind(this))
        .catch(function (error) {
            // handle error
            //TODO Add proper error handling!!
            console.log(error);
        })
        // .then(function () {
        //     // always executed
        // });

    }

    render() {
        return (
            <div className="Location-input">
                ONLY MELBOURNE TO START > <input placeholder="Enter location autocomplete " disabled></input>
                Sliding bar radius: 
                <input type="range" min="1" max="100" />
            </div>
        );
    }
}

//Adds relevant redux actions to component props
function mapDispatchToProps(dispatch) {
    return bindActionCreators({updateResults: updateResults}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchLocation);

