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

  onInput = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onLogin = async event => {
    event.preventDefault();

    try {
      await this.props.actions.loginUser(this.state);
      this.props.history.push('/forecast')
    } catch (error) {
      console.log(error.message)
    }
  }

  render() {
    return (
      <div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);
