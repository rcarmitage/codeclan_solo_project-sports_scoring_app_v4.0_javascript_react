// 26/05/20: FILE STATUS - Partially functional. Teams MVP is almost complete (needs Fixture data to be rendered on individual Team page). Fixtures MVP is in progress (currently working on rendering team.name rather than fixture.fixture_id for each FixtureItem). The functionality I originally put here is now in LeagueState (after refactoring using Context) and should be deleted from here, which I'll do once MVP is completed. I began with two different forms each for adding and editing Teams and Fixtures, which I changed to TeamForm and EditForm with a ternary operator meaning they can function for both.
// 26/05/20: TODO - [After completing MVP] Delete all code that is not being used.
// 26/05/20: TODO - [After completing MVP] League Table - look through my strategy here when I'm working on the LeagueState version. Delete everything from here.

import React, { Fragment, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../components/layout/Header';
import NavBar from '../components/layout/NavBar';
import Home from '../components/pages/Home';
import Teams from '../components/teams/Teams';
import Team from '../components/teams/Team';
import TeamForm from '../components/teams/TeamForm';
import Fixtures from '../components/fixtures/Fixtures';
import FixtureForm from '../components/fixtures/FixtureForm';
// import LeagueTable from '../components/league_table/LeagueTable';
import About from '../components/pages/About';
import ErrorPage from '../components/pages/ErrorPage';

import LeagueState from '../context/league/LeagueState';

// 26/05/20: STATUS - Functional, in that everything within return () does what it needs to do. Functions for CRUD need to be deleted as the logic is now in LeagueState.
// 26/05/20: TODO - [After completing MVP] Delete all code that is not being used.
const LeagueContainer = () => {
  // const [fixtures, setFixtures] = useState([]);
  // const [leagueTableTeams, setLeagueTableTeams] = useState([]);

  // TEAMS

  // Add Team
  // const addTeam = team => {
  //   setTeams([ ...teams, team ])
  // }

  // const onSubmitTeam = async (event) => {
  //   event.preventDefault();
  //   try {
  //     const body = { name };
  //     const response = await fetch("http://localhost:5000/api/teams/", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(body)
  //     });

  //     console.log(response);
  //   } catch (err) {
  //     console.error(err.message);
  //   };
  // };

  // const onTeamSubmit(newTeam)

  // Edit Team
  // const updateTeam = (id, updatedTeam) => {
  //   setTeams(teams.map(team => (team.id === id ? updatedTeam : team)))
  // }

  // FIXTURES
  // Get all fixtures
  // useEffect(() => {
  //   const getFixtures = () => {
  //     fetch('http://localhost:5000/api/fixtures/')
  //       .then((res) => res.json())
  //       .then((res) => setFixtures(res));
  //   };

  //   getFixtures();
  //   // eslint-disable-next-line
  // }, []);

  // Get single fixture
  // const getFixture = id => {
  //   fetch(`http://localhost:5000/api/fixtures/${id}`)
  //   .then(res => res.json())
  //   .then(res => setFixture(res))
  // };

  // // LEAGUE TABLE
  // useEffect(() => {
  //   const getLeagueTableTeams = () => {
  //     fetch("http://localhost:5000/api/teams/")
  //     .then(res => res.json())
  //     .then(res => setLeagueTableTeams(res))
  //   };

  //   getLeagueTableTeams();
  // }, []);

  return (
    <LeagueState>
      <Router>
        <Fragment>
          <Header />
          <NavBar id='nav' />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/teams' component={Teams} />
            <Route exact path='/teams/:id' component={Team} />
            <Route exact path='/teams/add-team' render={() => <TeamForm />} />
            <Route exact path='/teams/:id/edit' render={() => <TeamForm />} />
            <Route exact path='/fixtures' component={Fixtures} />} />
            {/* <Route
            exact path="/fixtures/:id"
            render={props => (
              <Fixture 
                { ...props }
                getFixture={getFixture}
                fixture={fixture}
              />
            )}
          /> */}
            <Route
              exact
              path='/fixtures/add-fixture'
              render={() => <FixtureForm />}
            />
            <Route
              exact
              path='/fixtures/:id/edit'
              render={() => <FixtureForm />}
            />
            <Route
              exact
              path='/league-table'
              // render={props => (
              // <LeagueTable
              //   leagueTableTeams={leagueTableTeams}
              // />
              // )}
            />
            <Route exact path='/about' component={About} />
            <Route component={ErrorPage} />
          </Switch>
        </Fragment>
      </Router>
    </LeagueState>
  );
};

export default LeagueContainer;
