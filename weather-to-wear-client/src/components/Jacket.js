import React, { Component } from 'react'

export default class Jacket extends Component {
  render() {
    const temperature = this.props.temperature;
    return (
      <div>
        <h2>Jacket Recommended?</h2>
        {temperature < 55 ? <h1>YES</h1> : <h1>NO</h1>}
      </div>
    )
  }
}
