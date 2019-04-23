import { Home } from '../ActionConstants';

const INITIAL_STATE = {
    employees: []
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case Home.SET_EMPLOYEE_DATA:
            return { ...state, employees: action.payload };
        default:
            return state;
    }
}