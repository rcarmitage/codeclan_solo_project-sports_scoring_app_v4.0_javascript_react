import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import FixtureItem from './FixtureItem';
import PropTypes from 'prop-types';

const Fixtures = ({ fixtures }) => {
  return (
    <Fragment>
      <div>
        <h4>Fixtures (Fixtures.js with hooks)</h4>
        <Link to="/add-fixture">
          <button>Add a Fixture</button>
        </Link>
        {fixtures.map(fixture => (
          <FixtureItem key={fixture.id} fixture={fixture} />
        ))}
      </div>
    </Fragment>
  );
};

Fixtures.propTypes = {
  fixtures: PropTypes.array.isRequired
};

export default Fixtures;