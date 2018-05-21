import * as types from './actionTypes';

export function loginSuccess(user) {
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
        console.log(response)

        if (response.errors) {
          console.log(response.errors)
        } else {
          localStorage.setItem('Token', response.token)
          dispatch(loginSuccess(response))
        }
      }).catch(error => console.log(error))
  }
}
