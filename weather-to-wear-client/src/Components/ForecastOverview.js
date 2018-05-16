import React, { Component } from 'react';

import ForecastDetail from './ForecastDetail';
import Jacket from './Jacket';
import Umbrella from './Umbrella';

const APIURL = `https://api.wunderground.com/api/${process.env.REACT_APP_WUNDERGROUND_API_KEY}/q`;

class ForecastOverview extends Component {
  constructor(props) {
    super(props)

    //console.log(this.props)
    this.state = {
      weatherData: [],
      dataLoaded: false
    }
  }

  // componentDidMount() {
  //   fetch(`${APIURL}/07024.json`, {mode: 'cors'})
  //   .then(response => response.json())
  //   .then(results => {
  //     this.setState({
  //       weatherData: results,
  //       dataLoaded: true
  //     })
  //     console.log(this.state)
  //   })
  // }

  // fetchWeather = () => {
  //
  // }

  render() {
    return (
      <div className="container py-4">
        <div className="row">
          <div className="col-md">
            <ForecastDetail zipcode={this.props.zipcode} weather={this.state.weatherData} data={this.state.dataLoaded} />
          </div>
          <div className="col-md">
            <Jacket temperature={this.props.jacket}/>
            <Umbrella precipitation={this.props.umbrella}/>
          </div>
        </div>
      </div>
    )
  }
}

export default ForecastOverview;

// Later extract Jacket and Umbrella to one component and pass in props?
// Reuse this component for each city saved for user
