// 26/05/20: STATUS - Partially functional. Renders the team_id of each Team in each Fixture. User can edit and delete Fixtures. Needs team.name instead of fixture.team_id.
// 26/05/20: TODO - Have teamA.name and teamB.name rendered instead of fixture.team_a_id and fixture.team_b_id - use team_a_id/team_b_id to filter the teams array in state and set that as teamA/teamB object in state, teamA.name/teamB.name can then be accessed.
import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import LeagueContext from '../../context/league/leagueContext';

// 26/05/20: STATUS - Partially functional. Will need more added to leagueContext state.
const FixtureItem = ({ fixture, teams }) => {
  const leagueContext = useContext(LeagueContext);
  // 26/05/20: STATUS - Partially functional.
  const {
    deleteFixture,
    setCurrentFixture,
    clearCurrentFixture,
    setTeamA,
  } = leagueContext;

  // 26/05/20: STATUS - Partially functional.
  const { fixture_id, team_a_id, team_b_id, winning_team_id, teamA } = fixture;
  // const { team_id, name } = team;

  // 26/05/20: STATUS - Functional.
  const onDelete = () => {
    deleteFixture(fixture_id);
    clearCurrentFixture();
  };

  // 26/05/20: STATUS - Not functional.
  // 26/05/20: TODO - Complete setTeamA() function in LeagueState, then choose the best place to call it.
  const getTeamA = (team_a_id) => {
    setTeamA(team_a_id);
  };

  // 26/05/20: STATUS - Partially functional.
  // 26/05/20: TODO - Team names rendered instead of team_a_id, etc.
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
