import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Weather to Wear</h1>
          <h3>NavBar</h3>
        </header>
        <p className="App-intro">
          <h2>Search Bar</h2>
          <h2>Weather Forecast</h2>
          <img src={logo} className="App-logo" alt="logo" />
          <p>Jacket Recommended</p>
          <p>Umbrella Recommended</p>
        </p>
      </div>
    );
  }
}

export default App;
