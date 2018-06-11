import React, { Component } from 'react'
import { connect } from 'react-redux';

const isLoggedIn = localStorage.getItem('Token') ? true : false;

class Jacket extends Component {
  render() {
    const temperature = this.props.temperature;
    return (
      <div style={{ marginBottom: '50px' }}>
        <h2>Jacket Recommended?</h2>
        { isLoggedIn && this.props.cold ?
          temperature < 60 ? <h1>YES</h1> : <h1>NO</h1>
          :
          temperature < 55 ? <h1>YES</h1> : <h1>NO</h1>
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    cold: state.session.user.cold_sensitivity
  }
}

export default connect(mapStateToProps)(Jacket);
