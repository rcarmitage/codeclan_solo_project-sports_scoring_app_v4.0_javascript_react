import React, { useReducer, useEffect, useState } from 'react';
import LeagueContext from './leagueContext';
import LeagueReducer from './leagueReducer';
import {
  GET_TEAMS,
  GET_TEAM,
  ADD_TEAM,
  EDIT_TEAM,
  DELETE_TEAM,
  TEAM_ERROR,
} from '../types';
// import Teams from '../../components/teams/Teams';

const LeagueState = (props) => {
  const initialState = {
    teams: [],
    team: {},
    error: null,
  };

  const [team, setTeam] = useState(initialState);
  const [state, dispatch] = useReducer(LeagueReducer, initialState);

  // GET ALL TEAMS
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

  // GET SINGLE TEAM
  const getTeam = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/teams/${id}`);
      const jsonData = await response.json();

      dispatch({
        type: GET_TEAM,
        payload: jsonData,
      });
    } catch (err) {
      console.error(err.message);
    }
  };

  // ADD TEAM
  // const addTeam = async (event) => {
  //   event.preventDefault();
  //   try {
  //     const body = { name };
  //     const response = await fetch('http://localhost:5000/api/teams/', {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify(body),
  //     });

  //     dispatch({
  //       type: ADD_TEAM,
  //       payload: response,
  //     });

  //     // TODO: Take this out, add alets for "Add a Fixture for the new Team" and "Go back to Teams page"
  //     window.location = '/teams';
  //   } catch (err) {
  //     dispatch({
  //       type: TEAM_ERROR,
  //       payload: err.response.msg,
  //     });
  //   }
  // };

  // EDIT TEAM

  // DELETE TEAM
  const deleteTeam = async (id) => {
    try {
      const deleteTeam = await fetch(`http://localhost:5000/api/teams/${id}`, {
        method: 'DELETE',
      });

      dispatch({
        type: DELETE_TEAM,
        payload: id,
      });

      window.location = '/teams';
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <LeagueContext.Provider
      value={{
        teams: state.teams,
        team: state.team,
        error: state.error,
        getTeam,
        // addTeam,
        deleteTeam,
      }}
    >
      {props.children}
    </LeagueContext.Provider>
  );
};

export default LeagueState;
