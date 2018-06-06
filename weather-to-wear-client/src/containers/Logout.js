import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as sessionActions from '../actions/sessionActions';

class Logout extends Component {
  onLogout = async event => {
    event.preventDefault();

    try {
      await this.props.actions.logout();
      this.props.history.push('/forecast')
    } catch (error) {
      console.log(error.message)
    }
  }

  render() {
    return(
      <div>
        <h2>Are you sure you want to log out?</h2>
        <button className="btn btn-primary" onClick={(event) => this.onLogout(event)}>Logout</button>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(sessionActions, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(Logout);