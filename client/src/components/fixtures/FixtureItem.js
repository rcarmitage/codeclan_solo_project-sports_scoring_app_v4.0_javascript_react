import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import LeagueContext from '../../context/league/leagueContext';

const FixtureItem = ({ fixture, team }) => {
  const leagueContext = useContext(LeagueContext);
  const {
    deleteFixture,
    setCurrentFixture,
    clearCurrentFixture,
    setTeamA,
  } = leagueContext;

  const { fixture_id, team_a_id, team_b_id, winning_team_id } = fixture;
  // const { team_id, name } = team;

  const onDelete = () => {
    deleteFixture(fixture_id);
    clearCurrentFixture();
  };

  const teamA = (team_a_id) => {
    // Get team_a_id from the fixture
    // Use it to find the relevant team in teams array in Context
    // Set this as teamA object
  };

  return (
    <Fragment>
      <div className='fixtures-container'>
        <div className='fixtures-container-top-row'>
          <p className='team-a'>{team_a_id}</p>
          <p className='vs'>vs</p>
          <p className='team-b'>{team_b_id}</p>
        </div>

        <div className='fixtures-container-middle-row'>
          <p className='winner-text'>Winner:</p>
          <p className='winner-team'>{winning_team_id}</p>
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
