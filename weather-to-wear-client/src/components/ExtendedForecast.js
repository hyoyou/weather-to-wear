import React, { Component } from 'react';

import ForecastDetail from './ForecastDetail';

class ExtendedForecast extends Component {
  render() {
    const { forecasts, zipcode } = this.props;
    
    return(
      <div>
        {forecasts && forecasts.map((forecast, index)=>
          <ForecastDetail
            key={index}
            date={forecast.date.weekday}
            zipcode={zipcode}
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
