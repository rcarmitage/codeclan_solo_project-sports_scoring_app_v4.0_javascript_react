import {
  GET_TEAMS,
  GET_TEAM,
  ADD_TEAM,
  EDIT_TEAM,
  DELETE_TEAM,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_TEAMS:
      return {
        ...state,
        teams: action.payload,
      };
    default:
      return state;
  }
};
