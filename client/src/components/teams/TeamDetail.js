import React from 'react';
// import { useHistory } from 'react-router-dom';

const TeamDetail = ({ team, onTeamSelected }) => {

  // let history = useHistory();

  function handleClick() {
    onTeamSelected(team.id);
    // history.push(`/teams/${team.id}`)
  }

  return (
    <React.Fragment>
      <div className="teams-container-top-row" onClick={handleClick}>
        <a className="team-name">{team.name}</a>
      </div>
      <div className="teams-container-middle-row">
        <a className="btn-team-details" href="/teams/:id">Team Details</a>
      </div>
      <div className="teams-container-bottom-row">
        <a className="btn-edit-team" href="/teams/${team.id}/edit">Edit</a>
        <form className="btn-delete-team" method="post" action="/teams/__/delete">
          <input type="submit" value="Delete" />
        </form>
      </div>
    </React.Fragment>
  )
}

export default TeamDetail;