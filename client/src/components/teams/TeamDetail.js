import React from 'react';
// import { useHistory } from 'react-router-dom';

const TeamDetail = ({ team }) => {
  return (
    <React.Fragment>
      <div className="teams-container-top-row">
        <a className="team-name">{team.name}</a>
      </div>
      <div className="teams-container-middle-row">
        <a className="btn-team-details" href="/teams/__">Team Details</a>
      </div>
      <div className="teams-container-bottom-row">
        <a className="btn-edit-team" href="/teams/__/edit">Edit</a>
        <form className="btn-delete-team" method="post" action="/teams/__/delete">
          <input type="submit" value="Delete" />
        </form>
      </div>
    </React.Fragment>
  )
}

export default TeamDetail;