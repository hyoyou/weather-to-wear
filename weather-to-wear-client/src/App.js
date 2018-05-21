import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import { fetchLocation } from './actions/forecastActions';

import SearchBar from './components/SearchBar';
import ForecastOverview from './components/ForecastOverview';
import Login from './components/Login';
import Logout from './components/Logout';

class App extends Component {
  componentDidMount() {
    this.props.fetchLocation();
  }

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Weather to Wear</h1>
            <h3>NavBar</h3>
            <Logout />
            <Route exact path="/login" component={Login} />
          </header>
          <div className="App-intro">
            <SearchBar />
            <ForecastOverview zipcode={this.props.geolocation.zipCode} forecast={this.props.forecast} />
          </div>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    geolocation: state.geolocation,
    forecast: state.forecast
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchLocation
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
