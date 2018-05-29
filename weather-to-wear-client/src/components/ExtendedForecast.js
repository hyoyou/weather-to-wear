import React, { Component } from 'react'

import ForecastDetail from './ForecastDetail';

const APIURL_FORECAST = `https://api.wunderground.com/api/${process.env.REACT_APP_WUNDERGROUND_API_KEY}/forecast10day/q`;

class ExtendedForecast extends Component {
  constructor(props) {
    super(props);

    this.state = {
      forecasts: []
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.forecasts !== this.state.forecasts) {
      console.log(nextProps.forecasts)
    }
  }

  handleClick = (event) => {
    event.preventDefault();
    let zipcode = this.props.zipcode

    return fetch(`${APIURL_FORECAST}/${zipcode}.json`)
      .then(response => response.json())
      .then(result => {
        result.forecast.simpleforecast.forecastday.map(weather =>
          this.setState(prevState => ({
            forecasts: [...prevState.forecasts, weather]
          }))
        )
      })
    // this.props.history.push('/extended');
  }

  render() {
    return(
      <div>
        <button onClick={(event) => this.handleClick(event)}>Get Extended Forecast</button>
        {this.state.forecasts && this.state.forecasts.slice(1).map(forecast =>
          <ForecastDetail
            date={forecast.date.weekday}
            zipcode={this.props.zipcode}
            icon={forecast.icon_url}
            condition={forecast.conditions}
            high_temperature={forecast.high}
            low_temperature={forecast.low}
            precipitation={forecast.pop} />
        )}
      </div>
    )
  }
}

export default ExtendedForecast;
