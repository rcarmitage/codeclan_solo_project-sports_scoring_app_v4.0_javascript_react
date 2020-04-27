import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import Home from '../components/Home';
import TeamsComponent from '../components/teams/TeamsComponent';
import TeamView from '../components/teams/TeamView';
// import AddTeamForm from '../components/teams/AddTeam';
import EditTeamForm from '../components/teams/EditTeamForm';
import FixturesComponent from '../components/fixtures/FixturesComponent';
// import FixtureView from '../components/fixtures/FixtureView';
// import AddFixture from '../components/fixtures/AddFixture';
// import EditFixture from '../components/fixtures/EditFixture';
import LeagueTable from '../components/LeagueTable';
import About from '../components/About';
import ErrorPage from '../components/ErrorPage';

class LeagueContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      teams: [],
      fixtures: [],
      currentTeam: null
    }
    this.handleTeamSelected = this.handleTeamSelected.bind(this);
    this.handleTeamEdit = this.handleTeamEdit(this);
  }

  componentDidMount() {
    const promises =[
      fetch('http://localhost:3005/api/teams')
        .then(res => res.json())
        .then(teams => this.setState({ teams: teams }))
      ,
      fetch('http://localhost:3005/api/fixtures')
        .then(res => res.json())
        .then(res => res.fixtures)
        .then(data => this.setState({ fixtures: data }))
    ]
    Promise.all(promises)
  }

  handleTeamSelected(id) {
    const selectedTeam = this.state.teams.find((team) => { return team.id === id })
    this.setState({ currentTeam: selectedTeam })
  }

  handleTeamEdit(updatedTeam) {
    fetch(`http://localhost:3005/api/teams/${updatedTeam.id}`, {
      method: 'PUT',
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedTeam),
    }).then(() =>
    fetch('http://localhost:3005/api/teams')
      .then(res => res.json())
      .then(teams => this.setState({ teams: teams }))
    )
  }
  
  render() {
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
                  teams={this.state.teams}
                />
              )}
            />
            <Route 
              exact path="/teams/:id"
              render={() => 
                <TeamView 
                  handleTeamSelected={this.handleSelect} team={this.state.currentTeam}
                />
              }
            />
            <Route 
              exact path="/teams/:id/edit"
              render={() =>
                <EditTeamForm
                  handleTeamEdit={this.handleTeamEdit} team={this.state.currentTeam}
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
    );
  }
}

export default LeagueContainer;