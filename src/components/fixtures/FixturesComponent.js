import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FixtureList from './FixtureList';

class FixturesComponent extends Component {
  render() {
    return (
      <div>
        <h4>Fixtures (FixturesComponent)</h4>
        <Link to="add-fixture">
          <button>Add a Fixture</button>
        </Link>
        
        <FixtureList />
      </div>
    );
  }
}

export default FixturesComponent;