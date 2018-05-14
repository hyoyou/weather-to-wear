import React, { Component } from 'react'

export default class Jacket extends Component {

    componentDidMount() {
      console.log(this.props)
    }

  render() {
    return (
      <div>
        <h2>Jacket Recommended?</h2>
        <h1>NO</h1>
        <p>{this.props.temperature}</p>
      </div>
    )
  }
}
