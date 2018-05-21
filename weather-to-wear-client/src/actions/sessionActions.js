import * as types from './actionTypes';

export function loginSuccess(user) {
  // console.log("payload", user)
  return {
    type: types.LOG_IN_SUCCESS,
    payload: user
  }
}

export function loginUser(credentials) {
  return dispatch => {
    return fetch('http://localhost:3001/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    }).then(response => response.json())
      .then(result => {
        if (result.errors) {
          console.log(result.errors)
        } else {
          console.log(result.token)
          localStorage.setItem('Token', result.token)
          dispatch(loginSuccess(result))
        }
      }).catch(error => console.log(error))
  }
}

export function logout() {
  return dispatch => {
    localStorage.clear();
    dispatch({type: types.LOGOUT});
  }
}
