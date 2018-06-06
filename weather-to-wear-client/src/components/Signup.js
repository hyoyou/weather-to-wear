import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as sessionActions from '../actions/sessionActions';

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      password: ''
    }
  }

  onInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSignup = (event) => {
    event.preventDefault();
    this.props.actions.signupUser(this.state);
    this.props.history.push('/')
  }

  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={this.state.name}
            onChange={(event) => this.onInput(event)} />
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

          <button type="submit" className="btn btn-primary" onClick={this.onSignup}>Sign Up</button>
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

export default connect(null, mapDispatchToProps)(SignUp);
