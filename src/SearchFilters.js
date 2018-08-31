import React, { Component } from 'react';
import {addFilter,removeFilter} from "./actions/index"
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

class SearchFilters extends Component {
    constructor(props) {
        super(props);
        this.renderFilterMenu = this.renderFilterMenu.bind(this);
        this.listFilterButtons = this.listFilterButtons.bind(this);
    }

    listFilterButtons(filters) {
        if(filters !== undefined && filters !== null) {
            const listFilters = filters.map((filter) =>
                <button onClick={()=>{this.props.removeFilter(filter)}} key={filter}>{filter}</button>
            );
            return (
                <div>{listFilters}</div>
            );
        }
        else {
            return;
        }
        
    }

    listFilterDropdowns(filters) {
        if(filters !== undefined && filters !== null) {
            const listFilters = filters.map((filter) =>
                <option value={filter.value} key={filter.value}>{filter.label}</option>
            );
            return listFilters;
        }
        return;
       
    }
    renderFilterMenu() {
        let temp = [{label:"Select a filter", value:""},{label:"Classical",value:"classical"},{label:"asdf",value:"fdsa"}]
        return(
            <select onChange={(e)=>{this.props.addFilter(e.target.value)}} value="">
                {this.listFilterDropdowns(temp)}
            </select>
        );
    }

    render() {
        console.log(this.props.filters)
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
        filters: state.filters
    }
}

//Adds relevant redux actions to component props
function mapDispatchToProps(dispatch) {
    return bindActionCreators({addFilter: addFilter, removeFilter:removeFilter}, dispatch);
}



export default connect(mapStateToProps, mapDispatchToProps)(SearchFilters);