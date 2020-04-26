import React from 'react';
import { Link } from 'react-router-dom';

const TeamView = ({ team }) => {
  if (!team) return null

  return (
    <React.Fragment>
      <form>
        <h3>Team: {team.name}</h3>
        <h4>Played: {team.played}</h4>
        <h4>Won: {team.won}</h4>
        <h4>Lost: {team.lost}</h4>
        <h4>Points: {team.points}</h4>
        <p>(Results of last 5 games go here)</p>
      </form>
      <Link to={`/teams/${team.id}/edit`}>
        <button>Edit</button>
      </Link>
      <Link to={`/teams/${team.id}/delete`}>
        <button>Delete</button>
      </Link>
    </React.Fragment>
  )
}

export default TeamView;