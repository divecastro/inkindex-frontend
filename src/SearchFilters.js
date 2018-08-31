import React, { Component } from 'react';
import {addFilter,removeFilter} from "./actions/index"
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import _ from 'lodash'

class SearchFilters extends Component {
    constructor(props) {
        super(props);
        this.renderFilterMenu = this.renderFilterMenu.bind(this);
        this.listFilterButtons = this.listFilterButtons.bind(this);
        this.listFilterDropdowns = this.listFilterDropdowns.bind(this);
    }

    listFilterButtons(filters) {
        //Only start listing if there are any filters
        if(filters !== undefined && filters !== null) {
            //List filters. Hit the uppercase on first letter for rendering
            const listFilters = filters.map((filter) =>
                <button onClick={()=>{this.props.removeFilter(filter)}} 
                        key={filter}>{_.startCase(filter)}
                </button>
            );
            return (
                <div>{listFilters}</div>
            );
        }
        else {
            return;
        }
        
    }

    listFilterDropdowns() {
        var x;
        var filts = ["Select a filter"];

        //Add something in case no filters found (should only be the case while loading first dataset)
        if(this.props.results.length === 0) {
            return <option value={""} key={"none"}>None yet!</option>
        }
        //List the dropdowns
        for(x in this.props.results) {
            var tags = this.props.results[x].tags.split(',');
            for(var y in tags) {
                if(filts.indexOf(tags[y]) === -1) {
                    filts.push(tags[y]);
                }
            }
        }

        //Render the filters
        if(filts !== undefined && filts !== null) {
            const listFilters = filts.map((filter) =>
                <option value={filter} key={filter}>{_.startCase(filter)}</option>
            );
            return listFilters;
        }
        return;
       
    }

    renderFilterMenu() {
        return(
            <select onChange={(e)=>{this.props.addFilter(e.target.value)}} value="">
                {this.listFilterDropdowns()}
            </select>
        );
    }

    render() {
        return (
            <div className="Filter-set">
                {this.renderFilterMenu()}
                {this.listFilterButtons(this.props.filters)}
                {/* <button onClick={()=>{this.props.addFilter("YEET")}}>Test Add</button>
                <button onClick={()=>{this.props.removeFilter("YEET")}}>Test Remove</button> */}
            </div>
            
        );
    }
}



function mapStateToProps(state) {
    return {
        filters: state.filters,
        results: state.results
    }
}

//Adds relevant redux actions to component props
function mapDispatchToProps(dispatch) {
    return bindActionCreators({addFilter: addFilter, removeFilter:removeFilter}, dispatch);
}



export default connect(mapStateToProps, mapDispatchToProps)(SearchFilters);