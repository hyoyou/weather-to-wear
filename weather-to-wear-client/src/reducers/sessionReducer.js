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
        user: action.payload
      }
    case types.DELETE_USER_CITY_SUCCESS:
      //id: 43
      const userCities = state.user.user_cities_attributes.filter(userCity => userCity.id !== parseInt(action.payload))
      // console.log(userCities)
      return {
        ...state,
        user: { ...state.user,
          user_cities_attributes: userCities
        }
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
