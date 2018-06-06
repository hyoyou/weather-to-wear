import React, { Component } from 'react';

import ForecastDetail from './ForecastDetail';
import ExtendedForecast from './ExtendedForecast';

class ForecastOverview extends Component {
  render() {
    return (
      <div>
        <ForecastDetail
          // forecast={this.props.forecast}
          zipcode={this.props.forecast.zipcode}
          icon={this.props.forecast.icon}
          condition={this.props.forecast.condition}
          high_temperature={this.props.forecast.highTemperature}
          low_temperature={this.props.forecast.lowTemperature}
          precipitation={this.props.forecast.precipitation}
        />
        <ExtendedForecast zipcode={this.props.zipcode} />
      </div>
    )
  }
}

export default ForecastOverview;
