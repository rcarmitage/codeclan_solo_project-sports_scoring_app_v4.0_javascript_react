import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import TeamsComponent from '../components/teams/TeamsComponent';

class TeamsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      teams: []
    }
  }

  componentDidMount() {
    const promises = [
      fetch('http://localhost:3005/api/teams')
      .then(res => res.json())
      .then(res => res["_embedded"])
      .then(res => res.teams)
      .then(data => this.setState({ teams: data }))
    ]
    Promise.all(promises)
  }

  render() {
    return (
      <Router>
        <React.Fragment>
          <Route exact path="/teams"
            render={() => (
              <TeamsComponent
                teams={this.state.teams}
              />
            )}
          />
        </React.Fragment>
      </Router>
    );
  }
}

export default TeamsContainer;