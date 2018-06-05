import * as types from './actionTypes';

export function loadUserSuccess(user) {

}

export function updateUserSuccess(user) {

}

export function loadUser(userId) {
  return dispatch => {
    return fetch(`http://localhost:3001/api/users/${userId}`, {
      method: 'GET'
    })
    .then(response => response.json())
    .then(result => {
      if (result.errors) {
        console.log(result.errors)
      } else {
        console.log("Fetch result:", result)
        // dispatch(setUser(result))
      }
    })
    .catch(error => console.log(error))
  }
}

export function updateUser(user) {
  console.log("User:", user)
  return dispatch => {
    return fetch(`http://localhost:3001/api/users/${user.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: {
          id: user.id,
          name: user.name,
          cold_sensitivity: user.coldSensitivity,
          opts_hands_free: user.optsHandsFree,
          user_cities_attributes: [
            {
              city_attributes: user.cities
            }
          ]
        }
      })
    })
    .then(response => response.json())
    .then(result => {
      if (result.errors) {
        console.log(result.errors)
      } else {
        console.log("Fetch result:", result)
        // dispatch(setUser(result))
      }
    })
    .catch(error => console.log(error))
  }
}
