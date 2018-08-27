import React, { Component } from 'react';

class ResultList extends Component {

    listResults(results) {
        if(results !== undefined) {
            const listResults = results.map((result) =>
                <li>{result}</li>
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
        return (
            <div className="Result-set">
                <ul>
                    {this.listResults(this.props.results)}
                    <li>Cleverly injected sponsored ad</li>

                </ul>
            </div>
        );
    }
}

export default ResultList