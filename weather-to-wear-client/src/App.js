import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import { fetchLocation } from './actions/forecastActions';
import { findUser } from './actions/settingsActions';
import { PrivateRoute } from './components/PrivateRoute';

import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Logout from './components/Logout';
import Settings from './components/Settings';
import ForecastOverview from './components/ForecastOverview';

const isLoggedIn = localStorage.getItem('Token') ? true : false;

class App extends Component {
  componentDidMount() {
    this.props.fetchLocation();

    const token = localStorage.getItem('Token')
    if (token) {
      console.log("App token:", token);
      this.props.findUser(token);
    }
  }

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route path='/' component={Home} />
            <Switch>
              { isLoggedIn ?
                <Route path='/forecast' render={(props) => <ForecastOverview zipcode={this.props.geolocation.zipCode} forecast={this.props.forecast} />} />
                :
                <Route path='/forecast' render={(props) => <ForecastOverview zipcode={this.props.geolocation.zipCode} forecast={this.props.forecast} />} />
              }
              <Route exact path='/login' component={Login} />
              <Route exact path='/signup' component={Signup} />
              <PrivateRoute exact path='/logout' component={Logout} />
              <Route exact path='/settings' render={(props) => <Settings user={this.props.user} />} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    geolocation: state.geolocation,
    forecast: state.forecast,
    user: state.session
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    ...bindActionCreators({ fetchLocation, findUser }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

//<PrivateRoute path='/forecast' render={(props) => this.props.cities.map((city) => <ForecastOverview zipcode={this.props.city.zipCode} forecast={this.props.forecast} />)} />
