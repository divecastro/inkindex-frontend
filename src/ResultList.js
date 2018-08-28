import React, { Component } from 'react';
import ResultItem from './ResultItem';
import {connect} from 'react-redux'

class ResultList extends Component {
    constructor(props) {
        super(props);
        this.state = ({first_fetch:false});
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
        //TEMPORARY SOLUTION - NOT ROBUST
        if(this.props.results.length === 0) {
            return (
                <div className="Result-set">
                    <b>No Results yet</b>
                </div>
            );
        } else {
            return (
                <div className="Result-set">
                    <ul>
                        {this.listResults(this.props.results)}
                        <li key="ad-1">Cleverly injected sponsored ad</li>
                    </ul>
                </div>
            );
        }
    }
}

function mapStateToProps(state) {
    return {
        results: state.results
    }
}


export default connect(mapStateToProps, null)(ResultList);
