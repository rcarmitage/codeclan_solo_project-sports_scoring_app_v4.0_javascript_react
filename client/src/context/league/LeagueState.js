// 26/05/20: FILE STATUS - Partially functional. I'm working out how to get Team names to render on FixtureItem.
// 26/05/20: TODO - Get Team data for Fixture.

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

// 26/05/20: STATUS - Partially functional.
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

  // 26/05/20: STATUS - Functional but needs refactoring to use axios instead of fetch to keep code consistent.
  // 26/05/20: TODO - [After completing MVP] Refactor to axios instead of fetch.
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

  // 26/05/20: STATUS - Functional but needs refactoring to use axios instead of fetch to keep code consistent.
  // 26/05/20: TODO - [After completing MVP] Refactor to axios instead of fetch.
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

  // 26/05/20: STATUS - Functional for current implementation. Want messages to show after submitting form.
  // 26/05/20: TODO - [After completing MVP] Message with links to 'Add Fixture' and 'Go to Teams'.
  // ADD TEAM
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

  // 26/05/20: STATUS - Functional for current implementation. Want messages to show after submitting form.
  // 26/05/20: TODO - [After completing MVP] Message with links to 'Add Fixture' and 'Go to Teams'.
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

  // 26/05/20: STATUS - Functional but needs refactoring to use axios instead of fetch to keep code consistent.
  // 26/05/20: TODO - [After completing MVP] Refactor to axios instead of fetch.
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

  // 26/05/20: STATUS - Functional but needs refactoring to use axios instead of fetch to keep code consistent.
  // 26/05/20: TODO - [After completing MVP] Refactor to axios instead of fetch.
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

  // GET SINGLE FIXTURE - I don't plan to need this so I'll leave it for now.
  // TEAM NAMES - Running getFixture will return an object with ids for team_a, team_b, winning_team and losing_team.

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

  // 26/05/20: STATUS - Functional but needs refactoring to use axios instead of fetch to keep code consistent.
  // 26/05/20: TODO - [After completing MVP] Refactor to axios instead of fetch.
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

  // 26/05/20: STATUS - Functional.
  // SET CURRENT FIXTURE
  const setCurrentFixture = (fixture) => {
    dispatch({ type: SET_CURRENT_FIXTURE, payload: fixture });
  };

  // 26/05/20: STATUS - Functional.
  // CLEAR CURRENT FIXTURE
  const clearCurrentFixture = () => {
    dispatch({ type: CLEAR_CURRENT_FIXTURE });
  };

  // 26/05/20: STATUS - Not functional. Have tried a few ways to get and render Team data and this seems to be one that isn't going to work. I'll likely delete it.
  // 26/05/20: TODO - [After completing MVP] Delete if unused.
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

  // 26/05/20: STATUS - Not functional. This seems to be the best option of the ones I've tried - have teams array, use team_a_id to filter the array and return one Team as an object, set that to teamA so I can render teamA.name on FixtureItem.
  // 26/05/20: TODO - Work out what I need to do to make this functional.
  // SET TEAM A
  const setTeamA = (teams, team_a_id) => {
    // Get teams array of objects, which has been called earlier with useEffect
    // getTeams();

    // Filter teams searching for team_a_id in team_id, set to teamAData
    const teamAData = teams.filter((team) => team.team_id === team_a_id);

    // Dispatch
    dispatch({ type: SET_TEAM_A, payload: teamAData });
  };

  // 26/05/20: STATUS - Not functional. Have tried a few ways to get and render Team data and this seems to be one that isn't going to work. I'll likely delete it.
  // 26/05/20: TODO - [After completing MVP] Delete if unused.// const getTeam = async (id) => {
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

  // 26/05/20: STATUS - Partially functional. Will continue to add state and functions as I work on them, then need to delete anything that's unused.
  // 26/05/20: TODO - [After completion of MVP] Delete anything that's not being used.
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
