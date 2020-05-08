import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const TeamItem = ({ team: { id, name } }) => {
  return (
    <Fragment>
      <div className="teams-container">
        
        <div className="teams-container-top-row">
          <p className="team-name">{name}</p>
        </div>

        <div className="teams-container-middle-row">
          <Link className="btn-team-details" to={`/teams/${id}`}>
           <button>Team Details</button>
          </Link>
        </div>

        <div className="teams-container-bottom-row">
          <Link className="btn-edit-team" to={`/teams/${id}/edit`}>
            <button>Edit</button>
          </Link>
          <Link className="btn-delete-team" to={`/teams/${id}/delete`}>
            <button>Delete</button>
          </Link>
        </div>
      
      </div>
    </Fragment>
  );
};

TeamItem.propTypes = {
  team: PropTypes.object.isRequired
};

export default TeamItem;