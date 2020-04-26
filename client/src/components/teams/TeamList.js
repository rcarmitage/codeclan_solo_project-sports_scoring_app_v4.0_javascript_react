import React from 'react';
import TeamDetail from './TeamDetail';

const TeamList = ({ teams }) => {
  const teamsNodes = teams.map((team) => {
    return (
      <TeamDetail
        key={team.id}
        team={team}
      />
    )
  })
  return (
    <React.Fragment>
    <div className="team-list">
      {teamsNodes}
    </div>
      {/* <table>
        <thead>
          <tr>
            <th> Team </th>
            <th> Played </th>
            <th> Won </th>
            <th> Lost </th>
            <th> Points </th>
          </tr>
        </thead>
        <tbody>
          {teamsNodes}
        </tbody>
      </table> */}
      {/* <div className="teams-container-top-row">
          <a className="team-name">__</a>
        </div>
        <div class="teams-container-middle-row">
          <a class="btn-team-details" href="/teams/<%= team.id %>">Team Details</a>
        </div>
        <div class="teams-container-bottom-row">
          <a class="btn-edit-team" href="/teams/<%= team.id %>/edit">Edit</a>
          <form class="btn-delete-team" method="post" action="/teams/<%= team.id %>/delete">
            <input type="submit" value="Delete"/>
          </form>
        </div>
      </div> */}
    </React.Fragment>
  )
}

export default TeamList;