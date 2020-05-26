// 26/05/20: FILE STATUS - Functional.

import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import TeamItem from './TeamItem';
import LeagueContext from '../../context/league/leagueContext';

// 26/05/20: STATUS - Functional.
const Teams = () => {
  const leagueContext = useContext(LeagueContext);
  const { teams } = leagueContext;

  // 26/05/20: STATUS - Functional.
  if (teams.length === 0) {
    return <h5>Please add a Team</h5>;
  }

  // 26/05/20: STATUS - Functional.
  return (
    <Fragment>
      <div>
        <h4>Teams (Teams.js with hooks)</h4>
        <Link to='/teams/add-team'>
          <button>Add a Team</button>
        </Link>
        {teams.map((team) => (
          <TeamItem key={team.team_id} team={team} />
        ))}
      </div>
    </Fragment>
  );
};

export default Teams;
