import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import Home from '../components/Home';
import TeamsComponent from '../components/teams/TeamsComponent';
// import TeamView from '../components/teams/TeamView';
// import AddTeam from '../components/teams/AddTeam';
// import EditTeam from '../components/teams/EditTeam';
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
      fixtures: []
    }
  }

  // componentDidMount() {
  //   const url = 'http://localhost:3005/api/teams';

  //   fetch(url)
  //     .then(res => res.json())
  //     .then(teams => this.setState({ teams: teams }))
  //     .catch(err => console.error);
  // }

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
  
  render() {
    return (
      <Router>
        <React.Fragment>
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
            <Route exact path="/fixtures" component={FixturesComponent} />
            <Route exact path="/league-table" component={LeagueTable} />
            <Route exact path="/about" component={About} />
            <Route component={ErrorPage} />
          </Switch>
        </React.Fragment>
      </Router>
    );
  }
}

export default LeagueContainer;