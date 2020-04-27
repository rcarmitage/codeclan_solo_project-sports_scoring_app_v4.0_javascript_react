import React, { Fragment, useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

function Team({ match }) {

  useEffect(() => {
    fetchTeam();
    console.log(match);
  }, []);

  const [team, setTeam] = useState({});

  let params = useParams();

  const fetchTeam = async () => {
    const fetchTeam = await fetch(`http://localhost:3005/api/teams/${match.params.id}`);
    const team = await fetchTeam.json();
    setTeam(team);
    console.log(team);
  }

  return (
    <Fragment>
      <div>
        <h4>Team (TeamDetail with hooks)</h4>
        <h5>Name: {team.name}</h5>
        <h5>ID: {team.id}</h5>
        <h5>ID parameter: {params.id}</h5>
        <h6>Played: {team.played}</h6>
        <h6>Won: {team.won}</h6>
        <h6>Lost: {team.lost}</h6>
        <h6>Points: {team.points}</h6>
        <p>(Results of last 5 games go here)</p>
      </div>
      <div>
        <Link to={`/teams/${team.id}/edit`}>
          <button>Edit</button>
        </Link>
        <Link to={`/teams/${team.id}/delete`}>
          <button>Delete</button>
        </Link>
      </div>
    </Fragment>
  );
}

export default Team;