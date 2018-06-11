import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';

import { fetchLocation } from './actions/forecastActions';
import { findUser } from './actions/sessionActions';

import ForecastOverview from './containers/ForecastOverview';
import Header from './components/Header';
import Login from './containers/Login';
import Logout from './containers/Logout';
import MyForecast from './containers/MyForecast';
import SearchBar from './containers/SearchBar';
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

  shouldComponentUpdate(nextProps) {
    console.log("Next:", nextProps);
    console.log("This:", this.props)
    console.log(nextProps.user !== this.props.user)
    return nextProps.user !== this.props.user;
  }

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Header />
            { this.props.error ? <p style={{color:"red"}}>{ this.props.error }</p> : '' }
            <Switch>
              <Route exact path='/' component={SearchBar} />
              { isLoggedIn ?
                <Route exact path='/forecast' render={(props) => <MyForecast cities={this.props.user.user_cities_attributes} forecast={this.props.forecast} />} />
                :
                <Route exact path='/forecast' render={(props) => <ForecastOverview forecast={this.props.forecast} />} />
              }
              <Route exact path='/login' component={Login} />
              <Route exact path='/signup' component={Signup} />
              <Route exact path='/logout' component={Logout} />
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
    user: state.session.user,
    error: state.error.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    ...bindActionCreators({ fetchLocation, findUser }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
