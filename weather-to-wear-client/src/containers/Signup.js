import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
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

  onSignup = event => {
    event.preventDefault();

    this.props.actions.signupUser(this.state)
  }

  render() {
    if (this.props.user.id) {
      return (
        <Redirect to='/settings' />
      )
    }

    return (
      <div style={{ marginTop: '50px' }}>
        <form>
          <label className="col-sm-2 col-form-label">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={this.state.name}
            onChange={(event) => this.onInput(event)}
          />
          <br />

          <label className="col-sm-2 col-form-label">Email</label>
          <input
            type="text"
            name="email"
            placeholder="Email Address"
            value={this.state.email}
            onChange={(event) => this.onInput(event)}
          />
          <br />

          <label className="col-sm-2 col-form-label">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={(event) => this.onInput(event)}
          />
          <br />

          <button type="submit" className="btn btn-outline-dark" onClick={this.onSignup}>Sign Up</button>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignUp));
