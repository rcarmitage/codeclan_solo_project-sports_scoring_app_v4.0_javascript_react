import React, { Fragment, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import LeagueContext from '../../context/league/leagueContext';

const Team = ({ match }) => {
  const leagueContext = useContext(LeagueContext);

  const { team, getTeam, deleteTeam } = leagueContext;

  useEffect(() => {
    getTeam(match.params.id);
    // eslint-disable-next-line
  }, []);

  const { team_id, name } = team;

  const onDelete = () => {
    deleteTeam(team_id);
  };

  return (
    <Fragment>
      <div>
        <h4>Team (Team.js)</h4>
        <h3>Name: {name}</h3>
        <h3>ID: {team_id}</h3>
        <p>(Played/Won/Lost to come from 'fixtures' table, Points = Won)</p>
        <p>(Fixtures to be listed here)</p>
      </div>
      <div>
        <Link to={`/teams/${team_id}/edit`}>
          <button>Edit</button>
        </Link>
        <button className='btn-delete-team' onClick={onDelete}>
          Delete
        </button>
      </div>
    </Fragment>
  );
};

export default Team;
