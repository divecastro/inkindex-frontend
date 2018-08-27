import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ResultList from './ResultList';
import SearchSet from './SearchSet';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Ink Index</h1>
        </header>

        <b>Search Div</b> 
        <SearchSet />
        
        <b>Result Div</b> 
        <ResultList />

      </div>
    );
  }
}

export default App;
