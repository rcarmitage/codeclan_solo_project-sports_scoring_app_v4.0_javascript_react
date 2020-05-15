import React, { useReducer } from 'react';
import LeagueContext from './leagueContext';
import LeagueReducer from './leagueReducer';
import {
  GET_TEAMS,
  GET_TEAM,
  ADD_TEAM,
  EDIT_TEAM,
  DELETE_TEAM,
} from '../types';
import Teams from '../../components/teams/Teams';

const LeagueState = (props) => {
  const initialState = {
    teams: [],
    team: {},
  };

  const [state, dispatch] = useReducer(LeagueReducer, initialState);

  // Get All Teams

  // Get Single Team

  // Add Team

  // Edit Team

  // Delete Team

  return (
    <LeagueContext.Provider
      value={{
        teams: state.teams,
        team: state.team,
      }}
    >
      {props.children}
    </LeagueContext.Provider>
  );
};

export default LeagueState;
