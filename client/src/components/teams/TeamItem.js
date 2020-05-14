import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const TeamItem = ({ team: { team_id, name }, deleteTeam }) => { 
  return (
    <Fragment>
      <div className="teams-container">
        
        <div className="teams-container-top-row">
          <p className="team-name">{name}</p>
        </div>

        <div className="teams-container-middle-row">
          <Link className="btn-team-details" to={`/teams/${team_id}`}>
           <button>Team Details</button>
          </Link>
        </div>

        <div className="teams-container-bottom-row">
          <Link className="btn-edit-team" to={`/teams/${team_id}/edit`}>
            <button>Edit</button>
          </Link>
          <button className="btn-delete-team" onClick={() => deleteTeam(team_id)}>
            Delete
          </button>
        </div>
      
      </div>
    </Fragment>
  );
};

TeamItem.propTypes = {
  team: PropTypes.object.isRequired
};

export default TeamItem;
