import React, { Component } from 'react';

import ForecastDetail from './ForecastDetail';
import Jacket from './Jacket';
import Umbrella from './Umbrella';

//console.log(process.env)
const APIURL = `https://api.wunderground.com/api/${process.env.REACT_APP_WUNDERGROUND_API_KEY}/geolookup/q/autoip.json`;

class ForecastOverview extends Component {
  constructor(props) {
    super(props);

    this.state = {
      zipCode: ''
    };
  }

  componentDidMount() {
    //console.log(APIURL)
    fetch(`${APIURL}`)
    .then(response => response.json())
    .then(result => {
      let zip = result.location.zip
      //console.log("state:", this.state.zipCode)
      this.setState({
        zipCode: zip
      })
      console.log("state:", this.state.zipCode)
    })
  }

  render() {
    return (
      <div className="container py-4">
        <div className="row">
          <div className="col-md">
            <ForecastDetail zipcode={this.state.zipCode}/>
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
