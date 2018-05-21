import * as types from '../actions/actionTypes';

export default function forecastReducer(state = {
  icon: '',
  condition: '',
  high_temperature: '',
  low_temperature: '',
  precipitation: ''
}, action) {
  switch (action.type) {
    case types.FETCH_FORECAST:
      return {
        icon: action.payload.icon_url,
        condition: action.payload.conditions,
        high_temperature: action.payload.high,
        low_temperature: action.payload.low,
        precipitation: action.payload.pop
      }
    default:
      return state;
  }
}
