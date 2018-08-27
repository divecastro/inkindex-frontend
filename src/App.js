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
            <select>
              <option value="todo">Style1</option>
              <option value="todo">Style2</option>
              <option selected value="todo">Filter dropdown</option>
              <option value="todo">Stylen</option>
            </select>
            <button>placeholder filter 1</button>
            <button>placeholder filter 2 </button>
          </div>

          <div className="Location-input">
            <input placeholder="Enter location autocomplete"></input>
            Sliding bar radius: 
            <input type="range" min="1" max="100" value="50" class="slider" id="myRange" />
          </div>
        </div>

        <b>Result Div</b> 
        <ResultList />

      </div>
    );
  }
}

export default App;
