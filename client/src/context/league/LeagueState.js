import React, { useReducer, useEffect, useState } from 'react';
import axios from 'axios';
import LeagueContext from './leagueContext';
import LeagueReducer from './leagueReducer';
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
// import Teams from '../../components/teams/Teams';

const LeagueState = (props) => {
  const initialState = {
    teams: [],
    team: {},
    currentTeam: null,
    error: null,
  };

  // const [team, setTeam] = useState(initialState);
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
    } catch (error) {
      console.error(error.message);
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
    } catch (error) {
      console.error(error.message);
    }
  };

  // ADD TEAM
  // BUG: I couldn't get this to send to the server/db - error "null value in column 'name' violates not-null constraint, so the data was being sent but in the wrong format to be saved to the db". Alternate version below.
  // const addTeam = async (team) => {
  //   // event.preventDefault();
  //   try {
  //     const body = { team };
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

  const addTeam = async (team) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const response = await axios.post(
        'http://localhost:5000/api/teams',
        team,
        config
      );

      dispatch({
        type: ADD_TEAM,
        payload: response.data,
      });

      // TODO: Take this out, add alets for "Add a Fixture for the new Team" and "Go back to Teams page"
      window.location = '/teams';
    } catch (error) {
      dispatch({
        type: TEAM_ERROR,
        payload: error.response.msg,
      });
    }

    dispatch({ type: ADD_TEAM, payload: team });
  };

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
    } catch (err) {
      console.error(err.message);
    }
  };

  // SET CURRENT TEAM
  const setCurrentTeam = (team) => {
    dispatch({ type: SET_CURRENT, payload: team });
  };

  // CLEAR CURRENT TEAM
  const clearCurrentTeam = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  return (
    <LeagueContext.Provider
      value={{
        teams: state.teams,
        team: state.team,
        currentTeam: state.currentTeam,
        error: state.error,
        getTeam,
        addTeam,
        deleteTeam,
        setCurrentTeam,
        clearCurrentTeam,
      }}
    >
      {props.children}
    </LeagueContext.Provider>
  );
};

export default LeagueState;
