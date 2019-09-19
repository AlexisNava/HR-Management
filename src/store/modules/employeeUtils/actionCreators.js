// Actions
import {
  REQUEST_POSITIONS,
  REQUEST_POSITIONS_SUCCESS,
  REQUEST_TEAMS,
  REQUEST_TEAMS_SUCCESS,
  REQUEST_ADD_EMPLOYEE,
  REQUEST_TEAMS_EMPLOYEES,
  REQUEST_TEAMS_EMPLOYEES_SUCCESS,
  REQUEST_ADD_POSITION,
  REQUEST_ADD_TEAM,
  REQUEST_REPORTS,
  REQUEST_REPORTS_SUCCESS,
  REQUEST_ADD_REPORT,
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

export const requestAddEmployee = (
  team,
  position,
  email,
  password,
  name,
  lastName,
  mothersName,
) => ({
  type: REQUEST_ADD_EMPLOYEE,
  team,
  position,
  email,
  password,
  name,
  lastName,
  mothersName,
});

export const requestTeamsEmployees = () => ({ type: REQUEST_TEAMS_EMPLOYEES });
export const requestTeamsEmployeesSuccess = payload => ({
  type: REQUEST_TEAMS_EMPLOYEES_SUCCESS,
  payload,
});

export const requestReports = () => ({ type: REQUEST_REPORTS });
export const requestReportsSuccess = payload => ({
  type: REQUEST_REPORTS_SUCCESS,
  payload,
});

export const requestAddPosition = positionName => ({
  type: REQUEST_ADD_POSITION,
  positionName,
});

export const requestAddTeam = teamName => ({
  type: REQUEST_ADD_TEAM,
  teamName,
});

export const requestAddReport = (arrivalTime, departureTime, assignedTo) => ({
  type: REQUEST_ADD_REPORT,
  arrivalTime,
  departureTime,
  assignedTo,
});
