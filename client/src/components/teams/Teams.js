import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import TeamItem from './TeamItem';
import LeagueContext from '../../context/league/leagueContext';

const Teams = ({ deleteTeam }) => {
  const leagueContext = useContext(LeagueContext);

  return (
    <Fragment>
      <div>
        <h4>Teams (Teams.js with hooks)</h4>
        <Link to='/teams/add-team'>
          <button>Add a Team</button>
        </Link>
        {leagueContext.teams.map((team) => (
          <TeamItem key={team.team_id} team={team} />
        ))}
      </div>
    </Fragment>
  );
};

export default Teams;
