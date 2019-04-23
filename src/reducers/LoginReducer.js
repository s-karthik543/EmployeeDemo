import { Login } from '../ActionConstants';

const INITIAL_STATE = {
    username: '',
    password: ''
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case Login.SET_USER_NAME:
            return { ...state, username: action.payload }
        case Login.SET_PASSWORD:
            return { ...state, password: action.payload }
        default:
            return state;
    }
}