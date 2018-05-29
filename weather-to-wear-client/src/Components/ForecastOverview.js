import React, { Component } from 'react';

import ForecastDetail from './ForecastDetail';
import ExtendedForecast from './ExtendedForecast';
import Jacket from './Jacket';
import Umbrella from './Umbrella';

class ForecastOverview extends Component {
  render() {
    return (
      <div className="container py-4">
        <div className="row">
          <div className="col-md">
            <ForecastDetail
              zipcode={this.props.zipcode}
              icon={this.props.forecast.icon}
              condition={this.props.forecast.condition}
              high_temperature={this.props.forecast.high_temperature}
              low_temperature={this.props.forecast.low_temperature}
              precipitation={this.props.forecast.precipitation} />
            <ExtendedForecast zipcode={this.props.zipcode} />
          </div>
          <div className="col-md">
            <Jacket temperature={this.props.forecast.low_temperature.fahrenheit} />
            <Umbrella precipitation={this.props.forecast.precipitation} />
          </div>
        </div>
      </div>
    )
  }
}

export default ForecastOverview;

// Later extract Jacket and Umbrella to one component and pass in props?
// Reuse this component for each city saved for user
