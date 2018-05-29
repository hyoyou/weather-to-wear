import * as types from '../actions/actionTypes';

export default function sessionReducer(state = {
  session: !!localStorage.Token,
  user: ''
}, action) {
  switch(action.type) {
    case types.LOG_IN_SUCCESS:
      return {
        session: !!localStorage.Token,
        user: action.user
      }
    case types.SIGN_UP_SUCCESS:
      return {
        session: !!localStorage.Token,
        user: action.user
      }
    case types.LOGOUT:
      return {
        session: !!localStorage.Token,
        user: ''
      }
    default:
      return state;
  }
}
