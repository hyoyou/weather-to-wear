import React, { Component } from 'react';

import ForecastDetail from '../components/ForecastDetail';

class ExtendedForecast extends Component {
  render() {
    return(
      <div>
        {this.props.forecasts && this.props.forecasts.map((forecast, index)=>
          <ForecastDetail
            key={index}
            date={forecast.date.weekday}
            zipcode={this.props.zipcode}
            icon={forecast.icon_url}
            condition={forecast.conditions}
            high_temperature={forecast.high.fahrenheit}
            low_temperature={forecast.low.fahrenheit}
            precipitation={forecast.pop}
          />
        )}
      </div>
    )
  }
}

export default ExtendedForecast;
