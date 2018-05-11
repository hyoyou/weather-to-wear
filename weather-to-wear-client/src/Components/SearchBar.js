import React, { Component } from 'react';

class SearchBar extends Component {
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
