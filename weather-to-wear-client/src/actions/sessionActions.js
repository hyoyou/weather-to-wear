import * as types from './actionTypes';

export function loginSuccess(user) {
  return {
    type: types.LOG_IN_SUCCESS,
    payload: user
  }
}

export function signupSuccess(user) {
  return {
    type: types.SIGN_UP_SUCCESS,
    payload: user
  }
}

export function loadUserSuccess(user) {
  return {
    type: types.LOAD_USER_SUCCESS,
    payload: user
  }
}

export function updateUserSuccess(user) {
  return {
    type: types.UPDATE_USER_SUCCESS,
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
    })
    .then(response => response.json())
    .then(result => {
      localStorage.setItem('Token', result.token)
      dispatch(loginSuccess(result))
    })
    .catch(error => console.log(error))
  }
}

export function signupUser(userInfo) {
  return dispatch => {
    return fetch('http://localhost:3001/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({user: userInfo})
    })
    .then(response => response.json())
    .then(result => {
      localStorage.setItem('Token', result.token)
      dispatch(signupSuccess(result))
    })
    .catch(error => console.log(error))
  }
}

export function findUser(token) {
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
      dispatch(loadUser(result.user.user.id))
    })
    .catch(error => console.log(error))
  }
}

export function loadUser(userId) {
  return dispatch => {
    return fetch(`http://localhost:3001/api/users/${userId}`, {
      method: 'GET'
    })
    .then(response => response.json())
    .then(result => {
      dispatch(loadUserSuccess(result))
    })
    .catch(error => console.log(error))
  }
}

export function updateUser(user) {
  return dispatch => {
    return fetch(`http://localhost:3001/api/users/${user.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        // user: {
        //   id: user.id,
        //   name: user.name,
        //   cold_sensitivity: user.cold_sensitivity,
        //   opts_hands_free: user.optsHandsFree,
        //   user_cities_attributes: user.cities
        // }
        user
      })
    })
    .then(response => response.json())
    .then(result => {
      dispatch(updateUserSuccess(result))
    })
    .catch(error => console.log(error))
  }
}

export function logout() {
  return dispatch => {
    localStorage.clear();
    dispatch({type: types.LOGOUT});
  }
}
