import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as forecastActions from '../actions/forecastActions';

import ForecastDetail from './ForecastDetail';

class ExtendedForecast extends Component {
  constructor(props) {
    super(props);

    this.state = {
      forecast: {
        icon: [],
        condition: [],
        high_temperature: [],
        low_temperature: [],
        precipitation: []
      }
    }
  }

  renderExtendedForecast = (weatherData) => {
    weatherData.map(weather => {
      // debugger

      this.setState = {
        forecast: {
          icon: weather.icon_url,
          condition: weather.conditions,
          high_temperature: weather.high,
          low_temperature: weather.low,
          precipitation: weather.pop
        }
      }

      // let day = weather.date.weekday;
      // let icon = weather.icon_url;
      // let condition = weather.conditions;
      // let high_temperature = weather.high;
      // let low_temperature = weather.low;
      // let precipitation = weather.pop;
      //
      // return (
      //   <li>
      //     <h2>Forecast for {day}</h2>
      //     <img src={icon} width='100' alt="icon for weather condition"/>
      //     <p>Condition: {condition}</p>
      //     <p>High Temperature: {high_temperature.fahrenheit}&#8457;/{high_temperature.celsius}&#8451;</p>
      //     <p>Low Temperature: {low_temperature.fahrenheit}&#8457;/{low_temperature.celsius}&#8451;</p>
      //     <p>% Precipitation: {precipitation}%</p>
      //   </li>
      // )
      return (
        <li><ForecastDetail zipcode={this.props.zipcode} forecast={this.state.forecast} /></li>
      )
    })
  }

  handleClick = (event) => {
    event.preventDefault();
    let zipcode = this.props.zipcode
    // console.log("ZIP", this.props.zipcode)
    this.props.actions.fetchExtended(zipcode)
    // this.props.history.push('/extended');
  }

  render() {
    return(
      <div>
        <button onClick={this.handleClick}>Get 10 Day Forecast</button>
        <ul>
          {this.props.extended.map(this.renderExtendedForecast)}

        </ul>
      </div>
    )
  }
}

function mapStateToProps({ extended }) {
  return { extended }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(forecastActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExtendedForecast);
