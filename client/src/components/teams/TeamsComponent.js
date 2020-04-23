import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TeamList from './TeamList';

class TeamsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teams: [
        {
          id: 1,
          name: "The Gym Bunnies",
          played: 2,
          won: 1,
          lost: 1,
          points: 1
        },
        {
          id: 2,
          name: "Shop Winventory",
          played: 2,
          won: 2,
          lost: 0,
          points: 2
        }
      ]
    }
  }

  render() {
    return (
      <div>
        <h4>Teams (TeamsComponent)</h4>
        <Link to="/add-team">
          <button>Add a Team</button>
        </Link>

        <TeamList 
          teams={this.state.teams}
        />
      </div>
    );
  }
}

export default TeamsComponent;