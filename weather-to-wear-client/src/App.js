import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import { PrivateRoute } from './components/PrivateRoute';
import './App.css';

import { fetchLocation } from './actions/forecastActions';

import SearchBar from './components/SearchBar';
import ForecastOverview from './components/ForecastOverview';
import MyForecast from './components/MyForecast';
import Login from './components/Login';
import Logout from './components/Logout';
import Settings from './components/Settings';

const isLoggedIn = localStorage.getItem('Token') ? true : false;

class App extends Component {
  componentDidMount() {
    this.props.fetchLocation();
    console.log(isLoggedIn)
  }

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Weather to Wear</h1>
            <ul>
            { isLoggedIn
              ?
              <li><NavLink to="/logout">Log Out</NavLink></li>
              :
              <li><NavLink to="/login">Log In</NavLink></li>
            }
            </ul>
            <Route path="/login" component={Login} />
            <Route path="/logout" component={Logout} />
            <SearchBar />
          </header>
          <div className="App-intro">
              { isLoggedIn && <MyForecast forecast={this.props.forecast} /> }
              <h1>Current Location</h1>
              <ForecastOverview zipcode={this.props.geolocation.zipCode} forecast={this.props.forecast} />
            <Switch>
              <PrivateRoute exact path="/settings" component={Settings} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

//Render forecast with geolocatio zipcode if user not signed in. else, render forecast based on user's cities

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
