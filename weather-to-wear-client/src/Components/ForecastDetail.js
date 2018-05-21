import React, { Component } from 'react'

export default class ForecastDetail extends Component {
  render() {
    return (
      <div>
        <h2>Forecast for {this.props.zipcode}</h2>
        <img src={this.props.forecast.icon} width='100'/>
        <p>Condition: {this.props.forecast.condition}</p>
        <p>High Temperature: {this.props.forecast.high_temperature.fahrenheit}&#8457;/{this.props.forecast.high_temperature.celsius}&#8451;</p>
        <p>Low Temperature: {this.props.forecast.low_temperature.fahrenheit}&#8457;/{this.props.forecast.low_temperature.celsius}&#8451;</p>
        <p>% Precipitation: {this.props.forecast.precipitation}%</p>
      </div>
    )
  }
}
