import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';

const TeamDetail = ({ team }) => {

  // let history = useHistory();

  // function handleClick() {
  //   handleTeamSelected(team.id);
  //   // history.push(`/teams/${team.id}`)
  // }

  return (
    <Fragment>
      <div className="teams-container">
        <div className="teams-container-top-row">
          <p className="team-name">{team.name}</p>
        </div>
        <div className="teams-container-middle-row">
          <Link className="btn-team-details" to={`/teams/${team.id}`}>
            <button>Team Details</button>
          </Link>
        </div>
        <div className="teams-container-bottom-row">
          <Link className="btn-edit-team" to={`/teams/${team.id}/edit`}>
            <button>Edit</button>
          </Link>
          <Link className="btn-delete-team" to={`/teams/${team.id}/delete`}>
            <button>Delete</button>
          </Link>
        </div>
      </div>
    </Fragment>
  )
}

export default TeamDetail;