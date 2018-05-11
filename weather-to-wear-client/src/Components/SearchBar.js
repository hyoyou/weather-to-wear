import React, { Component } from 'react';

//console.log(process.env)
const APIURL = `https://api.wunderground.com/api/${process.env.REACT_APP_WUNDERGROUND_API_KEY}/geolookup/q/autoip.json`;

class SearchBar extends Component {
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
      .then(result => console.log(result.location.zip))
  }

  onInputZipCode(zipcode) {
    console.log({zipcode})
  }

  render() {
    return (
      <form>
        <div className="form-row justify-content-center py-4">
          <span role="img" aria-label="left pointing magnifying glass">&#x1F50D;</span>
          <div className="col-auto">
            <input
              type="text"
              className="form-control"
              placeholder="Zip Code"
              onChange={event => this.onInputZipCode(event.target.value)} />
          </div>
          <button className="btn btn-outline-dark btn-sm" type="submit">Search</button>
        </div>
      </form>
    )
  };
}

export default SearchBar
