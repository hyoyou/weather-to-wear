import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as forecastActions from '../actions/forecastActions';

import ForecastButtons from '../components/ForecastButtons';
import ForecastOverview from '../components/ForecastOverview';

class MyForecast extends Component {
  constructor(props) {
    super(props)

    this.state = {
      cities: []
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.cities !== this.state.cities) {
      let zipArray = nextProps.cities.map((cities, i) => (
        cities.city_attributes.zip_code
      ))

      this.setState({ cities: zipArray })
    }

  }

  handleClick = (city, event) => {
    event.preventDefault();
    this.props.actions.fetchForecast(city);
    this.props.actions.setZipCode(city);
  }

  render() {
    return (
      <div>
        <h1>My Forecasts</h1>
        <ForecastButtons cities={this.state.cities} onClick={this.handleClick} />
        <ForecastOverview zipcode={this.props.forecast.zipcode} forecast={this.props.forecast} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    forecast: state.forecast
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(forecastActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyForecast);
