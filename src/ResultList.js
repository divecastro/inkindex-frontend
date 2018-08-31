import React, { Component } from 'react';
import ResultItem from './ResultItem';
import {connect} from 'react-redux'

class ResultList extends Component {
    constructor(props) {
        super(props);
        this.state = ({first_fetch:false});
        this.listResults = this.listResults.bind(this);
    }

    listResults(results) {
        //Check if there are any results
        if(results !== undefined && results !== null) {
            //Deep copy for manipulation
            let renderlist = [...results];
            //Check if actually any active filters else render all results
            if(this.props.filters!== undefined && this.props.filters.length > 0) {
                //Iterate active filters against the result tags and remove if no tags match
                for(var x in results) {
                    let dupe_flag = false;
                    let tags = results[x].tags.split(',')
                    for(var y in this.props.filters) {
                        if(tags.indexOf(this.props.filters[y]) !== -1) {
                            dupe_flag = true;
                            break;
                        }
                    }
                    //Remove result with no matching criteria
                    if(!dupe_flag) {
                        console.log(results[x])
                        renderlist.splice(renderlist.indexOf(results[x]),1);
                    }
                }
            }
            //Render results
            const listResults = renderlist.map((result) =>
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
        results: state.results,
        filters: state.filters
    }
}


export default connect(mapStateToProps, null)(ResultList);
