import {
  GET_TEAMS,
  GET_TEAM,
  ADD_TEAM,
  EDIT_TEAM,
  DELETE_TEAM,
  SET_CURRENT,
  CLEAR_CURRENT,
  TEAM_ERROR,
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
          team._id === action.payload._id ? action.payload : team
        ),
      };
    case DELETE_TEAM:
      return {
        ...state,
        teams: state.teams.filter((team) => team.team_id !== action.payload),
      };
    case SET_CURRENT:
      return {
        ...state,
        currentTeam: action.payload,
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        currentTeam: null,
      };
    case TEAM_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
