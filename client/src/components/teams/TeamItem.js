// 26/05/20: FILE STATUS - Functional.

import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import LeagueContext from '../../context/league/leagueContext';

// 26/05/20: STATUS - Functional.
const TeamItem = ({ team }) => {
  const leagueContext = useContext(LeagueContext);
  const { deleteTeam, setCurrentTeam, clearCurrentTeam } = leagueContext;

  const { team_id, name } = team;

  // 26/05/20: STATUS - Functional.
  const onDelete = () => {
    deleteTeam(team_id);
    clearCurrentTeam();
  };

  // 26/05/20: STATUS - Functional.
  return (
    <Fragment>
      <div className='teams-container'>
        <div className='teams-container-top-row'>
          <p className='team-name'>{name}</p>
        </div>

        <div className='teams-container-middle-row'>
          <Link className='btn-team-details' to={`/teams/${team_id}`}>
            <button>Team Details</button>
          </Link>
        </div>

        <div className='teams-container-bottom-row'>
          <Link className='btn-edit-team' to={`/teams/${team_id}/edit`}>
            <button onClick={() => setCurrentTeam(team)}>Edit</button>
          </Link>
          <button className='btn-delete-team' onClick={onDelete}>
            Delete
          </button>
        </div>
      </div>
    </Fragment>
  );
};

TeamItem.propTypes = {
  team: PropTypes.object.isRequired,
};

export default TeamItem;
