import React, { Component } from 'react';

export default class ForecastButtons extends Component {
  render() {
    return this.props.cities.map(city => {
      return (
        <button key={city} className="btn btn-outline-dark" style={{ marginRight: '10px' }} type="button" onClick={(event) => this.props.onClick(city, event)}>{city}</button>
      )
    })
  }
}
