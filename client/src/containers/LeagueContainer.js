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

const LeagueContainer = () => {
  const [teams, setTeams] = useState([]);
  const [team, setTeam] = useState({});
  const [fixtures, setFixtures] = useState([]);
  // const [leagueTableTeams, setLeagueTableTeams] = useState([]);

  // TEAMS
  // Get all teams
  useEffect(() => {
    async function getTeams() {
      const res = await fetch('http://localhost:5000/api/teams/');
      res
        .json()
        .then(res => setTeams(res))
    };
    
    // const getTeams = () => {
    //   fetch('http://localhost:5000/api/teams/')
    //   .then(res => res.json())
    //   .then(res => setTeams(res))
    // };
    
    getTeams();
  }, []);

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
  
  const getTeam = id => {
    fetch(`http://localhost:5000/api/teams/${id}`)
    .then(res => res.json())
    .then(res => setTeam(res))
  };

  // CRUD operations
  const addTeam = team => {
    setTeams([ ...teams, team ])
  }

  // const deleteTeam = id => {
  //   setTeams(teams.filter(team => team.id !== id))
  // }

  // const updateTeam = (id, updatedTeam) => {
  //   setTeams(teams.map(team => (team.id === id ? updatedTeam : team)))
  // }

  // FIXTURES
  // Get all fixtures
  useEffect(() => {
    const getFixtures = () => {
      fetch('http://localhost:5000/api/fixtures/')
      .then(res => res.json())
      .then(res => setFixtures(res))
    };
    
    getFixtures();
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
  //     fetch('http://localhost:5000/api/teams/')
  //     .then(res => res.json())
  //     .then(res => setLeagueTableTeams(res))
  //   };
    
  //   getLeagueTableTeams();
  // }, []);

  return (
    <Router>
      <Fragment>
        <Header />
        <NavBar id="nav" />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            exact path="/teams"
            render={props => (
              <Teams
                teams={teams}
              />
            )}
          />
          <Route 
            exact path="/teams/add-team"
            render={() =>
              <AddTeamForm
                addTeam={addTeam}
              />
            }
          />
          <Route
            exact path="/teams/:id"
            render={props => (
              <Team 
                { ...props }
                getTeam={getTeam}
                team={team}
              />
            )}
          />
          <Route 
            exact path="/teams/:id/edit"
            render={() =>
              <EditTeamForm
                // updateTeam={updateTeam}
              />
            }
          />
          <Route 
            exact path="/fixtures" 
            render={props => (
              <Fixtures 
                fixtures={fixtures}
              />
            )} 
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
            exact path="/league-table" 
            // render={props => (
              // <LeagueTable 
              //   leagueTableTeams={leagueTableTeams}
              // />
            // )}
          />
          <Route exact path="/about" component={About} />
          <Route component={ErrorPage} />
        </Switch>
      </Fragment>
    </Router>
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