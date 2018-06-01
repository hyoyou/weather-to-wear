import * as types from '../actions/actionTypes';

export default function sessionReducer(state = {
  session: !!localStorage.Token,
  user: {}
}, action) {
  console.log(action);
  switch(action.type) {
    case types.LOG_IN_SUCCESS:
      return {
        session: !!localStorage.Token,
        user: action.payload.user
      }
    case types.SIGN_UP_SUCCESS:
      return {
        session: !!localStorage.Token,
        user: action.payload.user
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
