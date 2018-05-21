import * as types from '../actions/actionTypes';

export default function forecastReducer(state = {zipCode: ''}, action) {
  switch (action.type) {
    case types.GET_ZIPCODE:
      return {
        zipCode: action.payload
      }
    default:
      return state;
  }
}
