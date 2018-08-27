import React, { Component } from 'react';
import ResultItem from './ResultItem';

class ResultList extends Component {
    constructor(props) {
        super(props);
        this.state = ({results:undefined, first_fetch:false});
    }

    componentDidMount() {
        console.log("Fetching initial dataset!");

        //Replace the call with a request for a close proximity dataset woop
        const axios = require('axios');
        // Make a request for a user with a given ID
        axios.get('https://triagetest-1.firebaseio.com/.json')
        .then(function (response) {
            // handle success
            console.log(response.data)
            this.setState({results:response.data});
        }.bind(this))
        .catch(function (error) {
            // handle error
            //TODO Add proper error handling!!
            console.log(error);
        })
        .then(function () {
            // always executed
            this.setState({first_fetch:true})
        }.bind(this));

    }

    listResults(results) {
        if(results !== undefined && results !== null) {
            const listResults = results.map((result) =>
                <ResultItem  item={result} key={result.name}/>
            );
            return (
                <ul>{listResults}</ul>
            );
        }
        else {
            return (
                <b>No Results Found</b>       
            );
        }
        
    }

    render() {
        if(this.state.first_fetch === false) {
            return (
                <div className="Result-set">
                    LOADING ICON SPINNER WOOP
                </div> 
            );
        } else {
            return (
                <div className="Result-set">
                    <ul>
                        {this.listResults(this.state.results)}
                        <li key="ad-1">Cleverly injected sponsored ad</li>

                    </ul>
                </div>
            );
        }
    }
}

export default ResultList