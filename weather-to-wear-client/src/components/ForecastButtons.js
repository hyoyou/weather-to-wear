import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ForecastButtons extends Component {
  render() {
    return this.props.cities.map(city => {
      return (
        <div key={city}>
          <button className="btn btn-primary" type="button" onClick={(event) => this.props.onClick(city, event)}>{city}</button>
        </div>
      )
    })
  }
}
