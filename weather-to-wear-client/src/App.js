import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import { fetchLocation } from './actions/forecastActions';
import { findUser } from './actions/sessionActions';

import ForecastOverview from './components/ForecastOverview';
import Header from './components/Header';
import Login from './containers/Login';
import Logout from './containers/Logout';
import MyForecast from './containers/MyForecast';
import SearchBar from './containers/SearchBar';
import Settings from './containers/Settings';
import Signup from './containers/Signup';

class App extends Component {
  componentDidMount() {
    this.props.fetchLocation();

    const token = localStorage.getItem('Token');
    if (token) {
      this.props.findUser(token);
    }
  }

  render() {
    const { user, forecast, error } = this.props;

    return (
      <div className="App">
        <Router>
          <div>
            <Header />
            { error ? <p style={{color:"red"}}>{ error }</p> : '' }
            <Switch>
              <Route exact path='/' component={SearchBar} />
              { user.id ?
                <Route exact path='/forecast' render={(props) => <MyForecast cities={user.user_cities_attributes} forecast={forecast} />} />
                :
                <Route exact path='/forecast' render={(props) => <ForecastOverview forecast={forecast} />} />
              }
              <Route exact path='/login' component={Login} />
              <Route exact path='/signup' component={Signup} />
              <Route exact path='/logout' component={Logout} />
              <Route exact path='/settings' render={(props) => <Settings user={user} />} />
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
