import * as util from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

const receiveCurrentUser = user => {
  return {
    type: RECEIVE_CURRENT_USER,
    user
  }
}

const logoutCurrentUser = user => {
  return {
    type: LOGOUT_CURRENT_USER
  }
}

const receiveErrors = errors => {
  return {
    type: RECEIVE_ERRORS,
    errors
  }
}

export const login = user => dispatch => {
  return util.login(user)
    .then( user => dispatch(receiveCurrentUser(user)));
}

export const logout = user => dispatch => {
  return util.logout(user)
    .then( () => dispatch(logoutCurrentUser(user)));
}

export const signup = user => dispatch => {
  return util.signup(user)
    .then( user => dispatch(receiveCurrentUser(user)))
}

