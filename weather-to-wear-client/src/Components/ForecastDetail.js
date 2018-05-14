import React, { Component } from 'react'

import WeatherData from './WeatherData';

export default class ForecastDetail extends Component {
  render() {
    return (
      <div>
        <h2>Forecast for {this.props.zipcode}</h2>
        <p>&#9728;</p>
        <p>Sunny</p>
        <p>Temperature: 70&#8457;</p>
        <p>% Precipitation: 0%</p>
      </div>
    )
  }
}
