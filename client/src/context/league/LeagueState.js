import React, { useReducer, useEffect } from 'react';
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
  const getTeams = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/teams/');
      const jsonData = await response.json();

      dispatch({
        type: GET_TEAMS,
        payload: jsonData,
      });
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getTeams();
    // eslint-disable-next-line
  }, []);

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
