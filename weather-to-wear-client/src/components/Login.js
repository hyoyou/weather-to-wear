import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as sessionActions from '../actions/sessionActions';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }

  onInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onLogin = (event) => {
    event.preventDefault();
    this.props.actions.loginUser(this.state);
  }

  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            name="email"
            value={this.state.email}
            onChange={(event) => this.onInput(event)} />

          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={(event) => this.onInput(event)} />

          <button type="submit" className="btn btn-primary" onClick={this.onLogin}>Log In</button>
        </form>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(sessionActions, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(Login);
