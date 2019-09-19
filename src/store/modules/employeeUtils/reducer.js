import { fromJS } from 'immutable';

// Actions
import {
  REQUEST_POSITIONS_SUCCESS,
  REQUEST_TEAMS_SUCCESS,
  REQUEST_TEAMS_EMPLOYEES_SUCCESS,
  REQUEST_REPORTS_SUCCESS,
} from './actions';

const initialState = fromJS({
  positions: null,
  teams: null,
  teamsEmployees: null,
  reports: null,
});

const employeeUtils = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_POSITIONS_SUCCESS:
      return state.set('positions', action.payload.positions);
    case REQUEST_TEAMS_SUCCESS:
      return state.set('teams', action.payload.teams);
    case REQUEST_TEAMS_EMPLOYEES_SUCCESS:
      return state.set('teamsEmployees', action.payload.teamsEmployees);
    case REQUEST_REPORTS_SUCCESS:
      return state.set('reports', action.payload.reports);
    default:
      return state;
  }
};

export default employeeUtils;
