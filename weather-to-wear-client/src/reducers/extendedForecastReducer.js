import * as types from '../actions/actionTypes';

export default function extendedForecastReducer(state = [], action) {
  switch (action.type) {
    case types.FETCH_EXTENDED:
      console.log(action.payload)
      return [ action.payload, ...state ]
    default:
      return state;
  }
}
