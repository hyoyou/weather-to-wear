import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      credentials: {
        email: '',
        password: ''
      }
    }
  }

  onInput = (event) => {
    const field = event.target.name;
    const credentials = this.state.credentials;
    credentials[field] = event.target.value;
    return this.setState({ credentials: credentials })
  }

  onLogin = (event) => {
    event.preventDefault();
    this.props.actions.loginUser(this.state.credentials);
  }

  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            name="email"
            value={this.state.credentials.email}
            onChange={this.onInput} />

          <input
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.onInput} />

          <input
            type="submit"
            className="btn btn-primary"
            onClick={this.onLogin} />
        </form>
      </div>
    )
  }
}

export default Login
