import React, { Component } from 'react';
import { connect } from 'react-redux';

import NavBar from './NavBar';
import NavBarUser from './NavBarUser';
import ForecastOverview from './ForecastOverview';

const isLoggedIn = localStorage.getItem('Token') ? true : false;

class Home extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <h1 className="App-title">Weather to Wear</h1>
          { isLoggedIn ? <NavBarUser /> : <NavBar /> }
        </header>
        <ForecastOverview zipcode={this.props.geolocation.zipCode} forecast={this.props.forecast} />
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    geolocation: state.geolocation,
    forecast: state.forecast
  }
}

export default connect(mapStateToProps)(Home);
