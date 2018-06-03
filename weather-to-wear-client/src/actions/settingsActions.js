import * as types from './actionTypes';

export function setUser(user) {
  return {
    type: types.SET_USER,
    payload: user
  }
}

export function findUser(token) {
  console.log("Find user:", token)
  return dispatch => {
    return fetch('http://localhost:3001/api/find', {
      method: 'POST',
      headers: {
        'Authorization': token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ token })
    })
    .then(response => response.json())
    .then(result => {
      if (result.errors) {
        console.log(result.errors)
      } else {
        console.log("Fetch result:", result)
        dispatch(setUser(result))
      }
    })
    .catch(error => console.log(error))
  }
}

export function loadUser() {

}

export function updateUser() {

}
