import React, { Component } from 'react';
import SearchLocation from './SearchLocation';

class SearchSet extends Component {

    render() {
        return (
            <div className="Search-set">  
                <div className="Text-filter">
                    <input placeholder="Enter Artist or Studio Name"></input>
                    <button>Submit name query</button>
                </div>
    
                <div className="Filter-set">
                    <select>
                        <option value="todo">Style1</option>
                        <option value="todo">Style2</option>
                        <option selected value="todo">Filter dropdown</option>
                        <option value="todo">Stylen</option>
                    </select>
                    <button>placeholder filter 1</button>
                    <button>placeholder filter 2 </button>
                </div>
    
                <SearchLocation />
            </div>
        );
    }
}

export default SearchSet