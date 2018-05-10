import React, { Component } from 'react';
import './App.css';

import SearchBar from './Components/SearchBar';
import ForecastDetail from './Components/ForecastDetail';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Weather to Wear</h1>
          <h3>NavBar</h3>
        </header>
        <p className="App-intro">
          <SearchBar />
          <ForecastDetail />
        </p>
      </div>
    );
  }
}

export default App;
