import React, { Component } from 'react';

export default class Umbrella extends Component {
  render() {
    const precipitation = this.props.precipitation
    return (
      <div>
        <h2>Umbrella Recommended?</h2>
        {precipitation > 50 ? <h1>YES</h1> : <h1>NO</h1>}
      </div>
    )
  }
}
