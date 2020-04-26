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
    <div className="team-list">
      {teamsNodes}
    </div>
  )
}

export default TeamList;