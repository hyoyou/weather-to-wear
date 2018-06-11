import React, { Component } from 'react';

import ForecastDetail from '../components/ForecastDetail';

const APIURL_FORECAST = `https://api.wunderground.com/api/${process.env.REACT_APP_WUNDERGROUND_API_KEY}/forecast10day/q`;

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      zipcode: '',
      forecast: ''
    }
  }

  onInputZipCode = event => {
    this.setState({
      zipcode: event.target.value
    });
  }

  onSearch(event) {
    event.preventDefault();

    const { zipcode } = this.state;

    return fetch(`${APIURL_FORECAST}/${zipcode}.json`)
    .then(response => response.json())
    .then(result => {
      this.setState({
        ...this.state,
        forecast: result.forecast.simpleforecast.forecastday[0]
      })
    })
  }

  render() {
    const {forecast} = this.state;

    return (
      <div style={{ marginTop: '50px' }}>
        <form onSubmit={event => this.onSearch(event)}>
          <div className="form-row justify-content-center py-4">
            <span role="img" aria-label="left pointing magnifying glass">&#x1F50D;</span>
            <div className="col-auto">
              <input
                type="text"
                className="form-control"
                value={this.state.zipcode}
                placeholder="Zip Code"
                onChange={this.onInputZipCode} />
            </div>
            <button className="btn btn-outline-dark btn-sm" type="submit">Search</button>
          </div>
        </form>

        {this.state.forecast &&
          <ForecastDetail
            zipcode={this.state.zipcode}
            icon={forecast.icon_url}
            condition={forecast.conditions}
            high_temperature={forecast.high.fahrenheit}
            low_temperature={forecast.low.fahrenheit}
            precipitation={forecast.pop}
          />
        }
      </div>
    )
  };
}

export default SearchBar;
