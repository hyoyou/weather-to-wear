import React, { Component } from 'react'

export default class weatherData extends Component {
  render() {
    return (
      <div>
        <h2>Forecast for {this.state.zipCode}</h2>
        <p>&#9728;</p>
        <p>Sunny</p>
        <p>Temperature: 70&#8457;</p>
        <p>% Precipitation: 0%</p>
      </div>
    )
  }
}
