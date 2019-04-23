import { Login } from '../ActionConstants';

export const setUserName = (value) => ({ type: Login.SET_USER_NAME, payload: value })

export const setPassword = (value) => ({ type: Login.SET_PASSWORD, payload: value })
