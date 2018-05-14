import React, { Component } from 'react';
import './App.css';

import SearchBar from './components/SearchBar';
import ForecastOverview from './components/ForecastOverview';

// const APIURL = `https://api.wunderground.com/api/${process.env.REACT_APP_WUNDERGROUND_API_KEY}/q/`;
// console.log(process.env)
const APIURL = `https://api.wunderground.com/api/${process.env.REACT_APP_WUNDERGROUND_API_KEY}/geolookup/q/autoip.json`;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      zipCode: '',
      icon: '',
      condition: '',
      temperature: '',
      precipitation: ''
    };

    //this.fetchWeather({currentZip});
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
    .then(result => this.setState({

      })
    )
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Weather to Wear</h1>
          <h3>NavBar</h3>
        </header>
        <div className="App-intro">
          <SearchBar />
          <ForecastOverview zipcode={this.state.zipCode} />
        </div>
      </div>
    );
  }
}

export default App;
