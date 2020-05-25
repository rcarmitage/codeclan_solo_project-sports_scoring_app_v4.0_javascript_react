import {
  GET_TEAMS,
  GET_TEAM,
  ADD_TEAM,
  EDIT_TEAM,
  DELETE_TEAM,
  SET_CURRENT_TEAM,
  CLEAR_CURRENT_TEAM,
  TEAM_ERROR,
  GET_FIXTURES,
  GET_FIXTURE,
  ADD_FIXTURE,
  EDIT_FIXTURE,
  DELETE_FIXTURE,
  SET_CURRENT_FIXTURE,
  CLEAR_CURRENT_FIXTURE,
  SET_TEAM_A,
  FIXTURE_ERROR,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_TEAMS:
      return {
        ...state,
        teams: action.payload,
      };
    case GET_TEAM:
      return {
        ...state,
        team: action.payload,
      };
    case ADD_TEAM:
      return {
        ...state,
        teams: [...state.teams, action.payload],
      };
    case EDIT_TEAM:
      return {
        ...state,
        teams: state.teams.map((team) =>
          team.team_id === action.payload.team_id ? action.payload : team
        ),
      };
    case DELETE_TEAM:
      return {
        ...state,
        teams: state.teams.filter((team) => team.team_id !== action.payload),
      };
    case SET_CURRENT_TEAM:
      return {
        ...state,
        currentTeam: action.payload,
      };
    case CLEAR_CURRENT_TEAM:
      return {
        ...state,
        currentTeam: null,
      };
    case TEAM_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case GET_FIXTURES:
      return {
        ...state,
        fixtures: action.payload,
      };
    case GET_FIXTURE:
      return {
        ...state,
        fixture: action.payload,
      };
    case ADD_FIXTURE:
      return {
        ...state,
        fixtures: [...state.fixtures, action.payload],
      };
    case EDIT_FIXTURE:
      return {
        ...state,
        fixtures: state.fixtures.map((fixture) =>
          fixture.fixture_id === action.payload.fixture_id
            ? action.payload
            : fixture
        ),
      };
    case DELETE_FIXTURE:
      return {
        ...state,
        fixtures: state.fixtures.filter(
          (fixture) => fixture.fixture_id !== action.payload
        ),
      };
    case SET_CURRENT_FIXTURE:
      return {
        ...state,
        currentFixture: action.payload,
      };
    case CLEAR_CURRENT_FIXTURE:
      return {
        ...state,
        currentFixture: null,
      };
    case SET_TEAM_A:
      return {
        ...state,
        teamA: action.payload,
      };
    case FIXTURE_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
