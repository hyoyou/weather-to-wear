import React, { Component } from 'react';

import ForecastDetail from '../components/ForecastDetail';

const APIURL_FORECAST = `https://api.wunderground.com/api/${process.env.REACT_APP_WUNDERGROUND_API_KEY}/forecast10day/q`;

class ExtendedForecast extends Component {
  constructor(props) {
    super(props);

    this.state = {
      forecasts: []
    }
  }

  handleClick = (event) => {
    event.preventDefault();

    let zipcode = this.props.zipcode

    return fetch(`${APIURL_FORECAST}/${zipcode}.json`)
      .then(response => response.json())
      .then(result => {
        result.forecast.simpleforecast.forecastday.slice(1, 5).map(weather =>
          this.setState(prevState => ({
            forecasts: [...prevState.forecasts, weather]
          }))
        )
      })
  }

  render() {
    return(
      <div>
        <button onClick={(event) => this.handleClick(event)}>Get Extended Forecast</button>
        {this.state.forecasts && this.state.forecasts.map((forecast, index)=>
          <ForecastDetail
            key={index}
            date={forecast.date.weekday}
            zipcode={this.props.zipcode}
            icon={forecast.icon_url}
            condition={forecast.conditions}
            high_temperature={forecast.high.fahrenheit}
            low_temperature={forecast.low.fahrenheit}
            precipitation={forecast.pop} />
        )}
      </div>
    )
  }
}

export default ExtendedForecast;
