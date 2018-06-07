import React, { Component } from 'react';
import { connect } from 'react-redux';

const isLoggedIn = localStorage.getItem('Token') ? true : false;

class Umbrella extends Component {
  render() {
    const precipitation = this.props.precipitation
    return (
      <div>
        <h2>Umbrella Recommended?</h2>
        { isLoggedIn && this.props.handsfree ?
          precipitation > 55 ? <h1>YES</h1> : <h1>NO</h1>
          :
          precipitation > 50 ? <h1>YES</h1> : <h1>NO</h1>
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    handsfree: state.session.user.opts_hands_free
  }
}

export default connect(mapStateToProps)(Umbrella);
