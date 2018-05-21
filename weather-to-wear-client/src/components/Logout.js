import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as sessionActions from '../actions/sessionActions';

class Logout extends Component {
  onLogout = (event) => {
    event.preventDefault();
    this.props.actions.logout();
  }

  render() {
    return(
      <button className="btn btn-primary" onClick={(event) => this.onLogout(event)}>Logout</button>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(sessionActions, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(Logout);