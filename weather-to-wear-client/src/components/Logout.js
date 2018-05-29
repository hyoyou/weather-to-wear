import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as sessionActions from '../actions/sessionActions';

class Logout extends Component {
  componentDidMount() {
    this.props.actions.logout();
    this.props.history.push('/login')
  }

  render() {
    return null
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(sessionActions, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(Logout);
