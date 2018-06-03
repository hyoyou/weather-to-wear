import * as types from '../actions/actionTypes';

export default function settingsReducer(state = {
  session: !!localStorage.Token,
  user: {}
}, action) {
  switch(action.type) {
    case types.SET_USER:
      console.log("Reducer action:", action);
      return {
        session: !!localStorage.Token,
        user: action.payload.user.user
      }
    default:
      return state;
  }
}
