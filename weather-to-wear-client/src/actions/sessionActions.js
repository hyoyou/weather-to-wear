import * as types from './actionTypes';

export function loginSuccess(user) {
  console.log("payload", user)
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
    }).then(res => res.json())
      .then(response => {
        if (response.errors) {
          console.log(response.errors)
        } else {
          console.log(response.token)
          localStorage.setItem('Token', response.token)
          dispatch(loginSuccess(response.token))
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
