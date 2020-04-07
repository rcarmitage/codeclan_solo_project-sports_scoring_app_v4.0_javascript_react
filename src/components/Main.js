import React, { Component } from 'react';
import About from './About';
import ErrorPage from './ErrorPage';
import Fixtures from './Fixtures';
import Home from './Home';
import LeagueTable from './LeagueTable';
import NavBar from './NavBar';
import Teams from './Teams';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teams: [],
      fixtures: []
    };
  }

  render() {
    return (
      <Router>
        <React.Fragment>
        <NavBar />
        <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/teams" component={Teams} />
        <Route path="/fixtures" component={Fixtures} />
        <Route path="/league-table" component={LeagueTable} />
        <Route path="/about" component={About} />
        <Route component={ErrorPage} />
        </Switch>
        </React.Fragment>
      </Router>
    );
  }
}

export default Main;