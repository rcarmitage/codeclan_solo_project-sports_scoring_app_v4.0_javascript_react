// 26/05/20: FILE STATUS - Functional for current implementation of MVP. Need to add all Fixtures for this Team, highlighted as Won or Lost.
// 26/05/20: TODO - Use team.team_id to get data from fixtures array in state, render all Fixtures, highlight as Won or Lost.

import React, { Fragment, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import LeagueContext from '../../context/league/leagueContext';

// 26/05/20: STATUS - Functional for current implementation, needs Fixtures for this Team.
// 26/05/20: TODO - Fixtures list for Team. Use team.team_id to get Fixtures from fixtures array in state.
const Team = ({ match }) => {
  const leagueContext = useContext(LeagueContext);

  // 26/05/20: STATUS - Functional.
  const { team, getTeam, deleteTeam } = leagueContext;

  // 26/05/20: STATUS - Functional.
  useEffect(() => {
    getTeam(match.params.id);
    // eslint-disable-next-line
  }, []);

  // 26/05/20: STATUS - Functional.
  const { team_id, name } = team;

  // 26/05/20: STATUS - Functional.
  const onDelete = () => {
    deleteTeam(team_id);
  };

  // 26/05/20: STATUS - Functional for current implementation.
  // 26/05/20: TODO - Fixtures list for Team.
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
