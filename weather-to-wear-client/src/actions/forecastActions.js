import fetch from 'isomorphic-fetch'

const APIURL_GEO = `https://api.wunderground.com/api/${process.env.REACT_APP_WUNDERGROUND_API_KEY}/geolookup/q/autoip.json`;
const APIURL_FORECAST = `https://api.wunderground.com/api/${process.env.REACT_APP_WUNDERGROUND_API_KEY}/forecast10day/q`;

export function fetchLocation() {
  return function(dispatch) {
    return fetch(`${APIURL_GEO}`)
    .then(response => response.json())
    .then(result => {
      // console.log(result)
      dispatch(fetchForecast(result.location.zip))
    })
  }
}

export function fetchForecast(zipcode) {
  return function(dispatch) {
    // console.log(zipcode)
    return fetch(`${APIURL_FORECAST}/${zipcode}.json`)
    // .then(response => console.log(response))
    .then(response => response.json())
    .then(result => {
      console.log(result.forecast.simpleforecast.forecastday[0])
    })
  }
}