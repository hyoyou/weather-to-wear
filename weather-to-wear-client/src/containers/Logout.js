import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import * as sessionActions from '../actions/sessionActions';

class Logout extends Component {
  onLogout = event => {
    event.preventDefault();

    this.props.actions.logout();
    this.props.history.push('/forecast')
  }

  render() {
    if (this.props.user.id) {
      return (
        <div style={{ marginTop: '50px' }}>
          <h2>Are you sure you want to log out?</h2>
          <button className="btn btn-outline-dark" onClick={(event) => this.onLogout(event)}>Logout</button>
        </div>
      )
    }

    return (
      <Redirect to='/forecast' />
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.session.user
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(sessionActions, dispatch)
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Logout));
