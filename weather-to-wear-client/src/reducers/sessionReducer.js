import * as types from '../actions/actionTypes';

export default function sessionReducer(state = {
  session: !!localStorage.Token,
  user: {}
}, action) {
  switch(action.type) {
    case types.LOG_IN_SUCCESS:
      return {
        ...state,
        session: !!localStorage.Token,
        user: action.payload.user,
      }
    case types.SIGN_UP_SUCCESS:
      return {
        ...state,
        session: !!localStorage.Token,
        user: action.payload.user
      }
    case types.FIND_USER_SUCCESS:
      console.log("Reducer action:", action);
      return {
        ...state,
        session: !!localStorage.Token,
        user: action.payload.user
      }
    case types.LOAD_USER_SUCCESS:
      return {
        ...state,
        session: !!localStorage.Token,
        user: action.payload
      }
    case types.UPDATE_USER_SUCCESS:
      return {
        ...state,
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
