import React, { Component } from 'react'

export default class ForecastDetail extends Component {
  render() {
    return (
      <div>
        {this.props.date ? <h2>{this.props.date}</h2> : <h2>Forecast for {this.props.zipcode}</h2>}
        <img src={this.props.icon} width='100' alt="icon for weather condition"/>
        <p>Condition: {this.props.condition}</p>
        <p>High Temperature: {this.props.high_temperature.fahrenheit}&#8457;/{this.props.high_temperature.celsius}&#8451;</p>
        <p>Low Temperature: {this.props.low_temperature.fahrenheit}&#8457;/{this.props.low_temperature.celsius}&#8451;</p>
        <p>% Precipitation: {this.props.precipitation}%</p>
      </div>
    )
  }
}
