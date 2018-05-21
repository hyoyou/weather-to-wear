import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import SearchBar from './components/SearchBar';
import ForecastOverview from './components/ForecastOverview';
import Login from './components/Login';
import Logout from './components/Logout';

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
      temperature: '70',
      precipitation: '0'
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
      //console.log(zip)

      fetch(`http://api.wunderground.com/api/${process.env.REACT_APP_WUNDERGROUND_API_KEY}/q/${zip}.json`)
      .then(response => response.json())
      .then(result => {
        console.log(result)
      })
      .catch((error) => {
        console.error(error);
      });
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
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Weather to Wear</h1>
            <h3>NavBar</h3>
            <Logout />
            <Route exact path="/login" component={Login} />
          </header>
          <div className="App-intro">
            <SearchBar />
            <ForecastOverview zipcode={this.state.zipCode} jacket={this.state.temperature} umbrella={this.state.precipitation}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
