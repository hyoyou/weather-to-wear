import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as forecastActions from '../actions/forecastActions';

import ForecastButtons from '../components/ForecastButtons';
import ForecastOverview from '../components/ForecastOverview';

class MyForecast extends Component {
  constructor(props) {
    super(props)

    this.state = { cities: this.props.cities }
  }

  // componentDidMount() {
  //   // console.log("props", this.props.cities)
  //   // console.log("state", this.state.cities)
  //   if (this.props.cities !== this.state.cities) {
  //     let zipArray = this.props.cities.map((cities, i) => (
  //       cities.city_attributes.zip_code
  //     ))
  //
  //     this.setState({ cities: zipArray })
  //   }
  // }

  componentWillReceiveProps(nextProps) {
    // console.log("props", this.props.cities)
    // console.log("props", nextProps.cities)
    // if (nextProps.cities !== this.state.cities) {
      let zipArray = nextProps.cities.map((cities, i) => (
        cities.city_attributes.zip_code
      ))

      this.setState({ cities: nextProps.cities })
    // }
  }

  handleClick = (city, event) => {
    event.preventDefault();
    this.props.actions.fetchForecast(city);
    this.props.actions.setZipCode(city);
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
          <ForecastOverview zipcode={this.props.forecast.zipcode} forecast={this.props.forecast} />
        </div>
      )
    } else {
      return (
        <h2>Loading...</h2>
      )
    }
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
