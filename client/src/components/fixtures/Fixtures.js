import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import FixtureItem from './FixtureItem';
import LeagueContext from '../../context/league/leagueContext';

const Fixtures = () => {
  const leagueContext = useContext(LeagueContext);
  const { fixtures } = leagueContext;

  if (fixtures.length === 0) {
    return <h5>Please add a Fixture</h5>;
  }

  return (
    <Fragment>
      <div>
        <h4>Fixtures (Fixtures.js with hooks)</h4>
        <Link to='/fixtures/add-fixture'>
          <button>Add a Fixture</button>
        </Link>
        {fixtures.map((fixture) => (
          <FixtureItem key={fixture.fixture_id} fixture={fixture} />
        ))}
      </div>
    </Fragment>
  );
};

export default Fixtures;
