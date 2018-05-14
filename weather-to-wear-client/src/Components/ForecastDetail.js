import React, { Component } from 'react'

// const APIURL = `https://api.wunderground.com/api/${process.env.REACT_APP_WUNDERGROUND_API_KEY}/q/`;
//console.log(process.env)
const APIURL = `https://api.wunderground.com/api/${process.env.REACT_APP_WUNDERGROUND_API_KEY}/geolookup/q/autoip.json`;

export default class ForecastDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      zipCode: '',
      icon: '',
      condition: '',
      temperature: '',
      precipitation: ''
    };
  }

  componentDidMount() {
    //console.log(APIURL)
    fetch(`${APIURL}`)
    .then(response => response.json())
    .then(result => {
      let zip = result.location.zip
      //console.log("state:", this.state.zipCode)
      this.setState({
        zipCode: zip
      })
      //console.log("state:", this.state.zipCode)
    })
  }

  getWeather = ({ icon, condition, temperature, precipitation }) => {
    this.setState = {
    }
  }

  fetchWeather = (zipcode) => {
    fetch(`${APIURL} + ${this.props.zipcode}`.json)
    .then(response => response.json())
    .then(result => console.log("hello", result))
  }

  render() {
    return (
      <div>
        <h2>Forecast for {this.state.zipCode}</h2>
        <p>&#9728;</p>
        <p>Sunny</p>
        <p>Temperature: 70&#8457;</p>
        <p>% Precipitation: 0%</p>
      </div>
    )
  }
}
