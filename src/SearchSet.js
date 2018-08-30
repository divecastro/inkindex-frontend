import React, { Component } from 'react';
import SearchLocation from './SearchLocation';
import SearchTextInput from './SearchTextInput';
import SearchFilters from './SearchFilters';

class SearchSet extends Component {

    render() {
        return (
            <div className="Search-set">  
                <SearchTextInput />
                <br />
                <SearchFilters />
    
                <SearchLocation />
            </div>
        );
    }
}

export default SearchSet