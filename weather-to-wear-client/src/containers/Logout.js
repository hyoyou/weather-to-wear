import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import * as sessionActions from '../actions/sessionActions';

const isLoggedIn = localStorage.getItem('Token') ? true : false;

class Logout extends Component {
  onLogout = event => {
    event.preventDefault();

    this.props.actions.logout();
    this.props.history.push('/');
  }

  render() {
    if (isLoggedIn) {
      return (
        <div style={{ marginTop: '50px' }}>
          <h2>Are you sure you want to log out?</h2>
          <button className="btn btn-primary" onClick={(event) => this.onLogout(event)}>Logout</button>
        </div>
      )
    } else {
      return (
        <Redirect push to='/' />
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
