import React, { Component } from 'react';
import {addFilter,removeFilter} from "./actions/index"
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

class SearchFilters extends Component {

    constructor(props) {
        super(props)
        this.state = {filters: this.props.filters}
    }
    
    listFilters(filters) {
        console.log("wow")
        console.log(filters)
        if(filters !== undefined && filters !== null) {
            const listFilters = filters.map((filter) =>
                <button disabled  item={filter} key={filter}/>
            );
            return (
                <div>{listFilters}</div>
            );
        }
        else {
            return (
                <b>No Results Found</b>       
            );
        }
        
    }

    render() {
        console.log(this.props.filters)
        return (
            <div className="Filter-set">
                not operational yet yeet
                <select>
                    <option value="todo">Style1</option>
                    <option value="todo">Style2</option>
                    <option selected value="todo">Filter dropdown </option>
                    <option value="todo">Stylen</option>
                </select>
                <button onClick={()=>{this.props.addFilter("YEET")}}>Test Add</button>
                <button onClick={()=>{this.props.removeFilter("YEET")}}>Test Remove</button>
                {this.listFilters(this.props.filters)}
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