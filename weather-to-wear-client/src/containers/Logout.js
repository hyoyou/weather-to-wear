import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import * as sessionActions from '../actions/sessionActions';

class Logout extends Component {
  state = { isloggedOut: false }

  onLogout = event => {
    event.preventDefault();

    this.props.actions.logout();
    this.setState({ isLoggedOut: true })
  }

  render() {
    if (!this.state.isLoggedOut) {
      return (
        <div style={{ marginTop: '50px' }}>
          <h2>Are you sure you want to log out?</h2>
          <button className="btn btn-primary" onClick={(event) => this.onLogout(event)}>Logout</button>
        </div>
      )
    } else {
      return (
        <h1 style={{ marginTop: '50px' }}><a href="/forecast">Get Forecast for Current Location</a></h1>
      )
    }
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(sessionActions, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(Logout);
