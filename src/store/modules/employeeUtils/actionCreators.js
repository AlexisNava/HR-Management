// Actions
import {
  REQUEST_POSITIONS,
  REQUEST_POSITIONS_SUCCESS,
  REQUEST_TEAMS,
  REQUEST_TEAMS_SUCCESS,
  REQUEST_ADD_EMPLOYEE,
  REQUEST_ADD_EMPLOYEE_SUCCESS,
  REQUEST_TEAMS_EMPLOYEES,
  REQUEST_TEAMS_EMPLOYEES_SUCCESS,
} from './actions';

export const requestPositions = () => ({ type: REQUEST_POSITIONS });
export const requestPositionsSuccess = payload => ({
  type: REQUEST_POSITIONS_SUCCESS,
  payload,
});

export const requestTeams = () => ({ type: REQUEST_TEAMS });
export const requestTeamsSuccess = payload => ({
  type: REQUEST_TEAMS_SUCCESS,
  payload,
});

export const requestAddEmployee = () => ({
  type: REQUEST_ADD_EMPLOYEE,
});
export const requestAddEmployeeSuccess = payload => ({
  type: REQUEST_ADD_EMPLOYEE_SUCCESS,
  payload,
});

export const requestTeamsEmployees = () => ({ type: REQUEST_TEAMS_EMPLOYEES });
export const requestTeamsEmployeesSuccess = payload => ({
  type: REQUEST_TEAMS_EMPLOYEES_SUCCESS,
  payload,
});
