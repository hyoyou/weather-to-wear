import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as forecastActions from '../actions/forecastActions';

import ForecastButtons from '../components/ForecastButtons';
import ForecastOverview from '../components/ForecastOverview';

const APIURL_FORECAST = `https://api.wunderground.com/api/${process.env.REACT_APP_WUNDERGROUND_API_KEY}/forecast10day/q`;

class MyForecast extends Component {
  constructor(props) {
    super(props)

    this.state = {
      cities: this.props.cities,
      forecast: this.props.forecast,
      extForecasts: []
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      cities: nextProps.cities,
      forecast: nextProps.forecast
    })
  }

  handleClick = (city, event) => {
    event.preventDefault();
    this.props.actions.fetchForecast(city);
    this.props.actions.setZipCode(city);
    this.setState({ extForecasts: [] })
  }

  render() {
    if (this.state.cities) {
      const citiesArray = this.state.cities.map((city, i) => (
        city.city_attributes.zip_code
      ))

      return (
        <div>
          <h1>My Forecasts</h1>
          <ForecastButtons cities={citiesArray} onClick={this.handleClick} />
          <ForecastOverview forecast={this.state.forecast} forecasts={this.state.extForecasts} />
        </div>
      )
    } else {
      return (
        <h2>Loading...</h2>
      )
    }
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(forecastActions, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(MyForecast);
