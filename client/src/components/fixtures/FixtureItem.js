import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import LeagueContext from '../../context/league/leagueContext';

const FixtureItem = ({ fixture }) => {
  const leagueContext = useContext(LeagueContext);
  const {
    deleteFixture,
    setCurrentFixture,
    clearCurrentFixture,
  } = leagueContext;

  const { fixture_id, team_a, team_b, winning_team } = fixture;

  const onDelete = () => {
    deleteFixture(fixture_id);
    clearCurrentFixture();
  };

  return (
    <Fragment>
      <div className='fixtures-container'>
        <div className='fixtures-container-top-row'>
          <p className='team-a'>{team_a}</p>
          <p className='vs'>vs</p>
          <p className='team-b'>{team_b}</p>
        </div>

        <div className='fixtures-container-middle-row'>
          <p className='winner-text'>Winner:</p>
          <p className='winner-team'>{winning_team}</p>
        </div>

        <div className='fixtures-container-bottom-row'>
          <Link
            className='btn-edit-fixture'
            to={`/fixtures/${fixture_id}/edit`}
          >
            <button onClick={() => setCurrentFixture(fixture)}>EDIT</button>
          </Link>
          <button className='btn-delete-team' onClick={onDelete}>
            Delete
          </button>
        </div>
      </div>
    </Fragment>
  );
};

FixtureItem.propTypes = {
  fixture: PropTypes.object.isRequired,
};

export default FixtureItem;
