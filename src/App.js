import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ResultList from './ResultList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Ink Index</h1>
        </header>
        <div className="Search-set">  <b>Search Div</b> 
          <div className="Text-filter">
            <input placeholder="Enter Artist or Studio Name"></input>
            <button>Submit name query</button>
          </div>

          <div className="Filter-set">
            <input placeholder="Filter dropdown"></input>
            <button>placeholder filter 1 </button>
            <button>placeholder filter 2 </button>
          </div>

          <div className="Location-input">
            <input placeholder="Enter location autocomplete"></input>
            <input placeholder="Sliding bar radius"></input>
          </div>
        </div>

        <b>Result Div</b> 
        <ResultList />

      </div>
    );
  }
}

export default App;
