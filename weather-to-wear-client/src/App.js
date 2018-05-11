import React, { Component } from 'react';
import './App.css';

import SearchBar from './components/SearchBar';
import ForecastOverview from './components/ForecastOverview';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Weather to Wear</h1>
          <h3>NavBar</h3>
        </header>
        <div className="App-intro">
          <SearchBar />
          <ForecastOverview />
        </div>
      </div>
    );
  }
}

export default App;
