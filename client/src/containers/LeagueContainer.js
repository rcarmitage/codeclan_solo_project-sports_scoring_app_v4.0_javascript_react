import React, { useState, Fragment, useReducer } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import Home from '../components/Home';
import TeamsComponent from '../components/teams/TeamsComponent';
import TeamDetail from '../components/teams/TeamDetail';
import AddTeamForm from '../components/teams/AddTeamForm';
import EditTeamForm from '../components/teams/EditTeamForm';
import FixturesComponent from '../components/fixtures/FixturesComponent';
// import FixtureView from '../components/fixtures/FixtureView';
// import AddFixture from '../components/fixtures/AddFixture';
// import EditFixture from '../components/fixtures/EditFixture';
import LeagueTable from '../components/LeagueTable';
import About from '../components/About';
import ErrorPage from '../components/ErrorPage';

const LeagueContainer = () => {
  const teamsData = [];

  const initialFormState = {id: null, name: '', played: '', won: '', lost: '', points: '', slug: ''};

  const [teams, setTeams] = useState(teamsData);
  // const [currentTeam, setCurrentTeam] = useState(initialFormState);

  // CRUD operations
  const addTeam = team => {
    setTeams([ ...teams, team ])
  }

  const deleteTeam = id => {
    setTeams(teams.filter(team => team.id !== id))
  }

  const updateTeam = (id, updatedTeam) => {
    setTeams(teams.map(team => (team.id === id ? updatedTeam : team)))
  }

  return (
    <Router>
      <Fragment>
        <Header />
        <NavBar id="nav" />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            exact path="/teams"
            render={() => (
              <TeamsComponent
                teams={teamsData}
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
          <Route path="/teams/:id" component={TeamDetail}>
          </Route>
          <Route 
            exact path="/teams/:id/edit"
            render={() =>
              <EditTeamForm
                updateTeam={updateTeam}
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

// // LeagueContainer orginally contained all logic for TeamsComponent and FixturesComponent, however I have moved some of this into the respective components and LeagueContainer now holds __ and the routes for all components
// class LeagueContainer extends Component {
//   // Constructor: __
//   constructor(props) {
//     super(props);

//     // State: Empty arrays for both teams and fixtures, which will be populated by data from the server which is requested by API calls from TeamsComponent and FixturesComponent (the API calls were originally in LeagueContainer)
//     this.state = {
//       teams: [],
//       fixtures: []
//       // currentTeam: null
//     }
//     // bind the functions __ below
//     // this.handleSelect = this.handleSelect.bind(this);
//     // this.handleTeamSelected = this.handleTeamSelected.bind(this);
//     this.handleTeamEdit = this.handleTeamEdit(this);
//     this.onTeamSubmit = this.onTeamSubmit.bind(this);
//   }

//   // componentDidMount: API call to fetch the data from the server (there are currently also API fetches in TeamsComponent and FixturesComponent so I don't think I need these here)
//   componentDidMount() {
//     const promises =[
//       fetch('http://localhost:3005/api/teams')
//         .then(res => res.json())
//         .then(teams => this.setState({ teams: teams }))
//       ,
//       fetch('http://localhost:3005/api/fixtures')
//         .then(res => res.json())
//         .then(res => res.fixtures)
//         .then(data => this.setState({ fixtures: data }))
//     ]
//     Promise.all(promises)
//   }

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