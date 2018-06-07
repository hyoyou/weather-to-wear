import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import { fetchLocation } from './actions/forecastActions';
import { findUser } from './actions/sessionActions';
import { PrivateRoute } from './components/PrivateRoute';

import ForecastOverview from './containers/ForecastOverview';
import Home from './components/Home';
import Login from './containers/Login';
import Logout from './containers/Logout';
import MyForecast from './containers/MyForecast';
import Settings from './containers/Settings';
import Signup from './containers/Signup';

const isLoggedIn = localStorage.getItem('Token') ? true : false;

class App extends Component {
  componentDidMount() {
    this.props.fetchLocation();

    const token = localStorage.getItem('Token')
    if (token) {
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
                <Route path='/forecast' render={(props) => <MyForecast cities={this.props.user.user_cities_attributes} forecast={this.props.forecast} />} />
                :
                <Route path='/forecast' render={(props) => <ForecastOverview forecast={this.props.forecast} />} />
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
    forecast: state.forecast,
    user: state.session.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    ...bindActionCreators({ fetchLocation, findUser }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

//<PrivateRoute path='/forecast' render={(props) => this.props.cities.map((city) => <ForecastOverview zipcode={this.props.city.zipCode} forecast={this.props.forecast} />)} />
