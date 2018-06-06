import React, { Component } from 'react';
import ForecastOverview from './ForecastOverview';

export default class MyForecast extends Component {
  constructor(props) {
    super(props)

    this.state = {
      cities: []
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.cities !== this.state.cities) {
      console.log(nextProps.cities)
      let zipArray = nextProps.cities.map((cities, i) => (
        cities.city_attributes.zip_code
      ))

      this.setState({ cities: zipArray })
    }

  }

  handleClick = (city, event) => {
    event.preventDefault();

    console.log(city)
  }

  renderForecasts() {
    return this.state.cities.map(city => {
      return (
        <div key={city}>
          <button type="button" onClick={(event) => this.handleClick(city)}>{city}</button>
          {/* <ForecastOverview zipcode={Number(city)} forecast={this.props.forecast} /> */}
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
