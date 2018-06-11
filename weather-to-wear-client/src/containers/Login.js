import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import * as sessionActions from '../actions/sessionActions';

const isLoggedIn = localStorage.getItem('Token') ? true : false;

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }

  onInput = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onLogin = event => {
    event.preventDefault();

    this.props.actions.loginUser(this.state);
    this.props.history.push('/forecast');
  }

  render() {
    if (isLoggedIn) {
      return (
        <Redirect push to='/forecast' />
      )
    } else {
      return (
        <div style={{ marginTop: '50px' }}>
          <form>
            <input
              type="text"
              name="email"
              placeholder="Email Address"
              value={this.state.email}
              onChange={(event) => this.onInput(event)} />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={this.state.password}
              onChange={(event) => this.onInput(event)} />

            <button type="submit" className="btn btn-primary" onClick={this.onLogin}>Log In</button>
          </form>
        </div>
      )
    }
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(sessionActions, dispatch)
  }
}

export default withRouter(connect(null, mapDispatchToProps)(Login));
