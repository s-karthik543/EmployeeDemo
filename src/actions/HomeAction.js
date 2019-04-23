import { Home } from '../ActionConstants';
import { employees } from '../Constants';

export const setEmployeeData = () => ({ type: Home.SET_EMPLOYEE_DATA, payload: employees.user });