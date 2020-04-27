import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';

const TeamDetail = ({ team, onTeamSelected }) => {

  // let history = useHistory();

  function handleClick() {
    onTeamSelected(team.id);
    // history.push(`/teams/${team.id}`)
  }

  return (
    <Fragment>
      <div className="teams-container-top-row" onClick={handleClick}>
        <a className="team-name">{team.name}</a>
      </div>
      <div className="teams-container-middle-row">
        <Link className="btn-team-details" to={`/teams/${team.id}`}>
          <button>Team Details</button>
        </Link>
      </div>
      {/* <div className="teams-container-bottom-row">
        <a className="btn-edit-team" href="/teams/${team.id}/edit">Edit</a>
        <form className="btn-delete-team" method="post" action="/teams/__/delete">
          <input type="submit" value="Delete" />
        </form>
      </div> */}
      <div className="teams-container-bottom-row">
        <Link to={`/teams/${team.id}/edit`}>
          <button>Edit</button>
        </Link>
        <Link to={`/teams/${team.id}/delete`}>
          <button>Delete</button>
        </Link>
      </div>
    </Fragment>
  )
}

export default TeamDetail;