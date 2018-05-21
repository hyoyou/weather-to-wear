import * as types from '../actions/actionTypes';

export default function forecastReducer(state = {
  zipCode: '',
  icon: '',
  condition: '',
  temperature: '',
  precipitation: ''
}, action) {
  switch (action.type) {
    case types.FETCH_FORECAST:
      return {
        condition: action.payload.conditions
      }
    default:
      return state;
  }
}
