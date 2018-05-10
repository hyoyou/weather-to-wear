import React, { Component } from 'react';

import ForecastDetail from './ForecastDetail';
import Jacket from './Jacket';
import Umbrella from './Umbrella';

class ForecastOverview extends Component {
  render() {
    return (
      <div className="container py-4">
        <div className="row">
          <div className="col-md">
            <ForecastDetail />
          </div>
          <div className="col-md">
            <Jacket />
            <Umbrella />
          </div>
        </div>
      </div>
    )
  }
}

export default ForecastOverview;

// Later extract Jacket and Umbrella to one component and pass in props?
// Reuse this component for each city saved for user