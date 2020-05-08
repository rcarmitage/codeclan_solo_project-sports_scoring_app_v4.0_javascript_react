import React, { Fragment, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../components/layout/Header';
import NavBar from '../components/layout/NavBar';
import Home from '../components/pages/Home';
import Teams from '../components/teams/Teams';
import Team from '../components/teams/Team';
import AddTeamForm from '../components/teams/AddTeamForm';
import EditTeamForm from '../components/teams/EditTeamForm';
import FixturesComponent from '../components/fixtures/FixturesComponent';
// import FixtureView from '../components/fixtures/FixtureView';
// import AddFixture from '../components/fixtures/AddFixture';
// import EditFixture from '../components/fixtures/EditFixture';
import LeagueTable from '../components/pages/LeagueTable';
import About from '../components/pages/About';
import ErrorPage from '../components/pages/ErrorPage';

const LeagueContainer = () => {
  const [teams, setTeams] = useState([]);
  const [team, setTeam] = useState({});

  // Get all teams
  useEffect(() => {
    const getTeams = () => {
      fetch('http://localhost:3005/api/teams/')
      .then(res => res.json())
      .then(res => setTeams(res))
    };
    
    getTeams();
  }, []);

  // Get single team
  useEffect(() => {
    const getTeam = (id) => {
      fetch(`http://localhost:3005/api/teams/${id}`)
      .then(res => res.json())
      .then(res => setTeam(res))
    };

    getTeam();
  }, []);

  // CRUD operations
  // const addTeam = team => {
  //   setTeams([ ...teams, team ])
  // }

  // const deleteTeam = id => {
  //   setTeams(teams.filter(team => team.id !== id))
  // }

  // const updateTeam = (id, updatedTeam) => {
  //   setTeams(teams.map(team => (team.id === id ? updatedTeam : team)))
  // }

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
                // addTeam={addTeam}
              />
            }
            />
          <Route
            exact path="/teams/:id"
            render={props => (
              <Team 
                { ...props }
                // getTeam={getTeam}
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
          <Route exact path="/fixtures" component={FixturesComponent} />
          <Route exact path="/league-table" component={LeagueTable} />
          <Route exact path="/about" component={About} />
          <Route component={ErrorPage} />
        </Switch>
      </Fragment>
    </Router>
  )
}


//   // handleSelect(event) {
//   //   console.log(event.target.value);
//   // }

//   // handleTeamSelected(id) {
//   //   const selectedTeam = this.state.teams.find((team) => { return team.id === id })
//   //   this.setState({ currentTeam: selectedTeam })
//   // }

//   onTeamSubmit(newTeam) {
//     fetch('http://localhost:3005/api/teams', {
//       method: 'POST',
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(newTeam),
//     })
//     .then(res => res.json())
//     .then(newEntry => {
//       const updatedTeams = [...this.state.teams, newEntry]
//       this.setState({ teams: updatedTeams })
//     })
//   }

//   handleTeamEdit(updatedTeam) {
//     fetch(`http://localhost:3005/api/teams/${updatedTeam.id}`, {
//       method: 'PUT',
//       headers: {
//         accept: 'application/json',
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(updatedTeam),
//     }).then(() =>
//     fetch('http://localhost:3005/api/teams')
//       .then(res => res.json())
//       .then(teams => this.setState({ teams: teams }))
//     )
//   }
  
//   render() {
//     return (
      // <Router>
      //   <Fragment>
      //     <Header />
      //     <NavBar id="nav" />
      //     <Switch>
      //       <Route exact path="/" component={Home} />
      //       <Route
      //         exact path="/teams"
      //         render={() => (
      //           <TeamsComponent
      //             teams={this.state.teams}
      //             // handleTeamSelected={this.handleTeamSelected}
      //             // handleSelect={this.handleSelect}
      //           />
      //         )}
      //       />
      //       <Route 
      //         exact path="/teams/add-team"
      //         render={() =>
      //           <AddTeamForm
      //             onTeamSubmit={this.onTeamSubmit}
      //           />
      //         }
      //         />
      //       <Route path="/teams/:id" component={TeamDetail}>
      //         {/* <TeamDetail /> */}
      //       </Route>
      //       <Route 
      //         exact path="/teams/:id/edit"
      //         render={() =>
      //           <EditTeamForm
      //             handleTeamEdit={this.handleTeamEdit}
      //             // team={this.state.currentTeam}
      //           />
      //         }
      //       />
      //       <Route exact path="/fixtures" component={FixturesComponent} />
      //       <Route exact path="/league-table" component={LeagueTable} />
      //       <Route exact path="/about" component={About} />
      //       <Route component={ErrorPage} />
      //     </Switch>
      //   </Fragment>
      // </Router>
//     );
//   }
// }

export default LeagueContainer;