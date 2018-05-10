import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      zipCode: ''
    };
  }

  onInputZipCode(zipcode) {
    console.log({zipcode})
  }

  render() {
    return (
      <form>
        <div className="form-row justify-content-center py-4">
          <label>&#x1F50D;</label>
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
