import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function sessionReducer(state = initialState, action) {
  switch(action.type) {
    case types.LOG_IN_SUCCESS:
      return {
        session: !!localStorage.Token,
        user: action.user
      }
    case types.LOGOUT:
      return {
        session: !!localStorage.Token,
        user: {}
      }
    default:
      return state;
  }
}
