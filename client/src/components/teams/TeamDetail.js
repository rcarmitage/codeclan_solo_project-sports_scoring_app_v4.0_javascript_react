import React from 'react';
import { useHistory } from 'react-router-dom';

const TeamDetail = ({ team }) => {

  return (
    <tr>
      <td>{team.name}</td>
    </tr>
  )
}

export default TeamDetail;