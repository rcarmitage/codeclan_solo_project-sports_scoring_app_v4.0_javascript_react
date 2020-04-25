import React from 'react';
// import { useHistory } from 'react-router-dom';

const TeamDetail = ({ team }) => {

  return (
    <tr>
      <td>{team.name}</td>
      <td>{team.played}</td>
      <td>{team.won}</td>
      <td>{team.lost}</td>
      <td>{team.points}</td>
    </tr>
  )
}

export default TeamDetail;