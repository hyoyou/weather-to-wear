import React, { Component } from 'react';

import ForecastDetail from './ForecastDetail';
import ExtendedForecast from './ExtendedForecast';

class ForecastOverview extends Component {
  render() {
    return (
      <div>
        <ForecastDetail
          zipcode={this.props.zipcode}
          icon={this.props.forecast.icon}
          condition={this.props.forecast.condition}
          high_temperature={this.props.forecast.high_temperature}
          low_temperature={this.props.forecast.low_temperature}
          precipitation={this.props.forecast.precipitation} />
        <ExtendedForecast zipcode={this.props.zipcode} />
      </div>
    )
  }
}

export default ForecastOverview;
