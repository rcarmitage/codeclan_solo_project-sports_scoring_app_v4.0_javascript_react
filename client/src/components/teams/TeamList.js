import React from 'react';
import TeamDetail from './TeamDetail';

const TeamList = ({ teams, handleTeamSelected, editTeam }) => {
  const teamsNodes = teams.map((team) => {
    return (
      <TeamDetail
        key={team.id}
        team={team}
        handleTeamSelected={handleTeamSelected}
        editTeam={editTeam}
      />
    )
  })
  return (
    <div className="team-list">
      {teamsNodes}
    </div>
  )
}

export default TeamList;