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
// import Teams from '../../components/teams/Teams';

const LeagueState = (props) => {
  const initialState = {
    teams: [],
    team: {},
    currentTeam: null,
    fixtures: [],
    fixture: {},
    currentFixture: null,
    teamA: null,
    teamB: null,
    winningTeam: null,
    losingTeam: null,
    error: null,
  };

  const [state, dispatch] = useReducer(LeagueReducer, initialState);

  // FUNCTIONS - TEAMS

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
  const editTeam = async (team) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const response = await axios.put(
        `http://localhost:5000/api/teams/${team.team_id}`,
        team,
        config
      );

      dispatch({
        type: EDIT_TEAM,
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
  };

  // const editTeam = async (team) => {
  //   const config = {
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   };

  //   try {
  //     const response = await axios.put(
  //       `http://localhost:5000/api/teams/${team_id}`,
  //       team,
  //       config
  //     );

  //     dispatch({
  //       type: EDIT_TEAM,
  //       payload: response.data,
  //     });
  //   } catch (error) {
  //     dispatch({
  //       type: TEAM_ERROR,
  //       payload: error.response.msg,
  //     });
  //   }
  // };

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
    } catch (error) {
      console.error(error.message);
    }
  };

  // SET CURRENT TEAM
  const setCurrentTeam = (team) => {
    dispatch({ type: SET_CURRENT_TEAM, payload: team });
  };

  // CLEAR CURRENT TEAM
  const clearCurrentTeam = () => {
    dispatch({ type: CLEAR_CURRENT_TEAM });
  };

  // FUNCTIONS - FIXTURES

  // GET ALL FIXTURES
  const getFixtures = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/fixtures/');
      const jsonData = await response.json();

      dispatch({
        type: GET_FIXTURES,
        payload: jsonData,
      });
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getFixtures();
    // eslint-disable-next-line
  }, []);

  // GET SINGLE FIXTURE - I don't plan to need this so I'll leave it for now
  // TEAM NAMES - Running getFixture will return an object with ids for team_a, team_b, winning_team and losing_team

  // ADD FIXTURE
  const addFixture = async (fixture) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const response = await axios.post(
        'http://localhost:5000/api/fixtures',
        fixture,
        config
      );

      dispatch({
        type: ADD_FIXTURE,
        payload: response.data,
      });

      window.location = '/fixtures';
    } catch (error) {
      dispatch({
        type: FIXTURE_ERROR,
        payload: error.response.msg,
      });
    }

    dispatch({ type: ADD_FIXTURE, payload: fixture });
  };

  // EDIT FIXTURE
  const editFixture = async (fixture) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const response = await axios.put(
        `http://localhost:5000/api/fixtures/${fixture.fixture_id}`,
        fixture,
        config
      );

      dispatch({
        type: EDIT_FIXTURE,
        payload: response.data,
      });

      window.location = '/fixtures';
    } catch (error) {
      dispatch({
        type: FIXTURE_ERROR,
        payload: error.response.msg,
      });
    }
  };

  const deleteFixture = async (id) => {
    try {
      const deleteFixture = await fetch(
        `http://localhost:5000/api/fixtures/${id}`,
        {
          method: 'DELETE',
        }
      );

      dispatch({
        type: DELETE_FIXTURE,
        payload: id,
      });
    } catch (error) {
      console.error(error.message);
    }
  };

  // SET CURRENT FIXTURE
  const setCurrentFixture = (fixture) => {
    dispatch({ type: SET_CURRENT_FIXTURE, payload: fixture });
  };

  // CLEAR CURRENT FIXTURE
  const clearCurrentFixture = () => {
    dispatch({ type: CLEAR_CURRENT_FIXTURE });
  };

  // GET TEAM A NAME
  // const getTeamA = async () => {
  //   try {
  //     const response = await fetch(`http://localhost:5000/api/fixtures/${id}.team_a_id`);
  //     const jsonData = await response.json();

  //     dispatch({
  //       type: GET_TEAM_A,
  //       payload: jsonData,
  //     });
  //   } catch (error) {
  //     console.error(error.message);
  //   }
  // };

  // SELECT * FROM teams
  //   WHERE id = $1

  // SET TEAM A
  const setTeamA = (team_a_id) => {
    dispatch({ type: SET_TEAM_A, payload: team_a_id });
  };

  // const getTeam = async (id) => {
  //   try {
  //     const response = await fetch(`http://localhost:5000/api/teams/${id}`);
  //     const jsonData = await response.json();

  //     dispatch({
  //       type: GET_TEAM,
  //       payload: jsonData,
  //     });
  //   } catch (error) {
  //     console.error(error.message);
  //   }
  // };

  return (
    <LeagueContext.Provider
      value={{
        teams: state.teams,
        team: state.team,
        currentTeam: state.currentTeam,
        fixtures: state.fixtures,
        fixture: state.fixture,
        currentFixture: state.currentFixture,
        teamA: state.teamA,
        error: state.error,
        getTeam,
        addTeam,
        editTeam,
        deleteTeam,
        setCurrentTeam,
        clearCurrentTeam,
        // getFixture,
        addFixture,
        editFixture,
        deleteFixture,
        setCurrentFixture,
        clearCurrentFixture,
        setTeamA,
      }}
    >
      {props.children}
    </LeagueContext.Provider>
  );
};

export default LeagueState;
