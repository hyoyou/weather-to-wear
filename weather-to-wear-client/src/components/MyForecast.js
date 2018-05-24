import React, { Component } from 'react';
import ForecastOverview from './ForecastOverview';

export default class MyForecast extends Component {
  constructor(props) {
    super(props)

    this.state = {
      cities: ['07024', '10001']
    }
  }

  renderForecasts() {
    return this.state.cities.map(city => {
      return (
        <div key={city}>
          <ForecastOverview zipcode={Number(city)} forecast={this.props.forecast} />
        </div>
      )
    })
  }

  render() {
    console.log()
    return (
      <div>
        <h1>My Forecasts</h1>
        {this.renderForecasts()}
      </div>
    )
  }
}
