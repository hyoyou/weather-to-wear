import React, { Component } from 'react';

import Jacket from './Jacket';
import Umbrella from './Umbrella';

class ForecastDetail extends Component {
  render() {
    return (
      <div>
        <h2>Forecast for [zipcode]</h2>
        <Jacket />
        <Umbrella />
      </div>
    )
  }
}

export default ForecastDetail;

// Later extract Jacket and Umbrella to one component and pass in props?
// Reuse this component for each city saved for user
