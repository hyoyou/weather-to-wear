import React, { Component } from 'react';

export default class Umbrella extends Component {
  render() {
    return (
      <div>
        <h2>Umbrella Recommended?</h2>
        <h1>NO</h1>
        <p>{this.props.precipitation}</p>
      </div>
    )
  }
}
