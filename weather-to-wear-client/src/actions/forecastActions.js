import fetch from 'isomorphic-fetch'
import * as types from '../actions/actionTypes';

const APIURL_GEO = `https://api.wunderground.com/api/${process.env.REACT_APP_WUNDERGROUND_API_KEY}/geolookup/q/autoip.json`;
const APIURL_FORECAST = `https://api.wunderground.com/api/${process.env.REACT_APP_WUNDERGROUND_API_KEY}/forecast10day/q`;

export function fetchLocation() {
  return function(dispatch) {
    return fetch(`${APIURL_GEO}`)
    .then(response => response.json())
    .then(result => {
      // console.log(result.location.zip)
      dispatch(fetchForecast(result.location.zip))
      dispatch({
        type: types.GET_ZIPCODE,
        payload: result.location.zip
      })
    })
  }
}

export function setZipCode(zipcode) {
  // console.log(user);
  return {
    type: types.SET_ZIPCODE,
    payload: zipcode
  }
}

export function fetchForecast(zipcode) {
  return function(dispatch) {
    // console.log(zipcode)
    return fetch(`${APIURL_FORECAST}/${zipcode}.json`)
    // .then(response => console.log(response))
    .then(response => response.json())
    .then(result => {
      // console.log("Fetch", result)
      // console.log(result.forecast.simpleforecast.forecastday[0])
      dispatch({
        type: types.FETCH_FORECAST,
        payload: result.forecast.simpleforecast.forecastday[0]
      })
    })
  }
}
