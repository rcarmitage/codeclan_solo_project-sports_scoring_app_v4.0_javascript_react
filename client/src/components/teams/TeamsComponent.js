import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TeamList from './TeamList';

class TeamsComponent extends Component {
  render() {
    return (
      <div>
        <h4>Teams (TeamsComponent)</h4>
        <Link to="/add-team">
          <button>Add a Team</button>
        </Link>

        <TeamList 
          teams={this.props.teams}
        />
      </div>
    );
  }
}

export default TeamsComponent;