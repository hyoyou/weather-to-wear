import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as forecastActions from '../actions/forecastActions';

import ForecastButtons from '../components/ForecastButtons';
import ForecastOverview from './ForecastOverview';

class MyForecast extends Component {
  constructor(props) {
    super(props)

    this.state = {
      cities: this.props.cities,
      extForecasts: []
    }
  }

  componentDidMount() {
    this.setState({ cities: this.props.cities })
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      cities: nextProps.cities
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
          <ForecastOverview forecast={this.props.forecast} forecasts={this.state.extForecasts} />
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
