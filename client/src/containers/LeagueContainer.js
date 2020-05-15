import React, { Fragment, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../components/layout/Header';
import NavBar from '../components/layout/NavBar';
import Home from '../components/pages/Home';
import Teams from '../components/teams/Teams';
import Team from '../components/teams/Team';
import AddTeamForm from '../components/teams/AddTeamForm';
import EditTeamForm from '../components/teams/EditTeamForm';
import Fixtures from '../components/fixtures/Fixtures';
// import AddFixture from '../components/fixtures/AddFixture';
// import EditFixture from '../components/fixtures/EditFixture';
// import LeagueTable from '../components/league_table/LeagueTable';
import About from '../components/pages/About';
import ErrorPage from '../components/pages/ErrorPage';

import LeagueState from '../context/league/LeagueState';

const LeagueContainer = () => {
  const [teams, setTeams] = useState([]);
  const [team, setTeam] = useState({});
  const [fixtures, setFixtures] = useState([]);
  // const [leagueTableTeams, setLeagueTableTeams] = useState([]);

  // TEAMS
  // Get all teams
  // useEffect(() => {
  //   async function getTeams() {
  //     const res = await fetch("http://localhost:5000/api/teams/");
  //     res
  //       .json()
  //       .then(res => setTeams(res))
  //   };

  //   getTeams();
  // }, []);

  // Get single team
  // useEffect(() => {
  //   async function getTeam(id) {
  //     const res = await fetch(`http://localhost:5000/api/teams/${id}`);
  //     res
  //       .json()
  //       .then(res => setTeam(res))
  //   };

  //   getTeam();
  // }, []);

  const getTeam = (id) => {
    fetch(`http://localhost:5000/api/teams/${id}`)
      .then((res) => res.json())
      .then((res) => setTeam(res));
  };

  // CRUD operations
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

  // const deleteTeam = id => {
  //   setTeams(teams.filter(team => team.id !== id))
  // }

  // Delete Team
  const deleteTeam = async (id) => {
    try {
      const deleteTeam = await fetch(`http://localhost:5000/api/teams/${id}`, {
        method: 'DELETE',
      });

      //  setTeams(teams.filter(team => team.team_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  // const updateTeam = (id, updatedTeam) => {
  //   setTeams(teams.map(team => (team.id === id ? updatedTeam : team)))
  // }

  // FIXTURES
  // Get all fixtures
  useEffect(() => {
    const getFixtures = () => {
      fetch('http://localhost:5000/api/fixtures/')
        .then((res) => res.json())
        .then((res) => setFixtures(res));
    };

    getFixtures();
    // eslint-disable-next-line
  }, []);

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
            <Route
              exact
              path='/teams'
              render={(props) => <Teams deleteTeam={deleteTeam} />}
            />
            <Route
              exact
              path='/teams/add-team'
              render={() => (
                <AddTeamForm
                // addTeam={addTeam}
                // onSubmitTeam={onSubmitTeam}
                />
              )}
            />
            <Route
              exact
              path='/teams/:id'
              render={(props) => (
                <Team {...props} getTeam={getTeam} team={team} />
              )}
            />
            <Route
              exact
              path='/teams/:id/edit'
              render={() => (
                <EditTeamForm
                // updateTeam={updateTeam}
                />
              )}
            />
            <Route
              exact
              path='/fixtures'
              render={(props) => <Fixtures fixtures={fixtures} />}
            />
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

//   handleTeamEdit(updatedTeam) {
//     fetch(`http://localhost:5000/api/teams/${updatedTeam.id}`, {
//       method: 'PUT',
//       headers: {
//         accept: 'application/json',
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(updatedTeam),
//     }).then(() =>
//     fetch('http://localhost:5000/api/teams')
//       .then(res => res.json())
//       .then(teams => this.setState({ teams: teams }))
//     )
//   }

export default LeagueContainer;
