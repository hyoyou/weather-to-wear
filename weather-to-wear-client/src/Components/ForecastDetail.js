import React, { Component } from 'react'

import Jacket from './Jacket';
import Umbrella from './Umbrella';

export default class ForecastDetail extends Component {
  render() {
    return (
      <div className="container py-4">
        <div className="row">
          <div className="col-md">
            {this.props.date ? <h2>{this.props.date}</h2> : <h2>Forecast for {this.props.zipcode}</h2>}
            <img src={this.props.icon} width='100' alt="icon for weather condition"/>
            <p>Condition: {this.props.condition}</p>
            <p>High Temperature: {this.props.high_temperature}&#8457;</p>
            <p>Low Temperature: {this.props.low_temperature}&#8457;</p>
            <p>% Precipitation: {this.props.precipitation}%</p>
          </div>

          <div className="col-md">
            <Jacket temperature={this.props.low_temperature} />
            <Umbrella precipitation={this.props.precipitation} />
          </div>
        </div>
      </div>
    )
  }
}
