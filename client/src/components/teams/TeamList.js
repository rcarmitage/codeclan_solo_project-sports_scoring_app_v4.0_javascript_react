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
      <table>
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
      </table>
    </React.Fragment>
  )
}

export default TeamList;