import * as types from './actionTypes';

export function loginSuccess(user) {
  // console.log(user);
  return {
    type: types.LOG_IN_SUCCESS,
    payload: user
  }
}

export function signupSuccess(user) {
  // console.log("payload", user)
  return {
    type: types.SIGN_UP_SUCCESS,
    payload: user
  }
}

export function findUserSuccess(user) {
  return {
    type: types.FIND_USER_SUCCESS,
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
      if (result.errors) {
        console.log(result.errors)
      } else {
        localStorage.setItem('Token', result.token)
        dispatch(loginSuccess(result))
      }
    })
    .catch(error => console.log(error))
  }
}

export function signupUser(userInfo) {
  // console.log(userInfo)
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
      if (result.errors) {
        console.log(result.errors)
      } else {
        // console.log(result.token)
        localStorage.setItem('Token', result.token)
        dispatch(signupSuccess(result))
      }
    })
    .catch(error => console.log(error))
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
      // debugger
      if (result.errors) {
        console.log(result.errors)
      } else {
        // console.log("Fetch result:", result)
        dispatch(findUserSuccess(result.user))
      }
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
