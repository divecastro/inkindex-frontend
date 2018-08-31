import React, { Component } from 'react';
import Select from 'react-select';
import {connect} from 'react-redux'

  //TODO TODO Refactor the way values and names work to instead use the artist/studio key.
class SearchTextInput extends Component {
    state = {
        selectedOption: null,
    }
    
    getOptions() {
        //Get options from the current result set
        return this.props.results.map((result) => {
            return ({value: result.name.toLowerCase(),label: result.name})
        })
    }

    handleChange = (selectedOption) => {
        //TODO TIE TO A REDUX ACTION TO ACTUALLY SEND USER TO CORRECT PAGE
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
    }

    render() {
        const { selectedOption } = this.state;

        return (
            <div className="Text-filter">
                <Select
                    value={selectedOption}
                    onChange={this.handleChange}
                    options={this.getOptions()}
                    placeholder="Enter Artist or Studio Name"
                    noOptionsMessage={() => 
                    <a onClick={()=>{alert("Submission page")}}>
                        "No Artist/Studio Found. Check your city or submit a new artist! Here (make only this part blue +clickable lol)"
                    </a>
                    }

                />
                {/* <input placeholder="Enter Artist or Studio Name"></input>
                <button>Submit name query</button> */}
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        results: state.results
    }
}


export default connect(mapStateToProps, null)(SearchTextInput);