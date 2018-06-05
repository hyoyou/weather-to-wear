import * as types from '../actions/actionTypes';

export default function settingsReducer(state = {
  session: !!localStorage.Token,
  userId: ''
}, action) {
  switch(action.type) {
    case types.LOAD_USER_SUCCESS:
      return {
        ...state,
        session: !!localStorage.Token,
        user: action.payload.user,
      }
    default:
      return state;
  }
}
