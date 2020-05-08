import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import TeamItem from './TeamItem';
import PropTypes from 'prop-types';

const Teams = ({ teams }) => {
  return (
    <Fragment>
      <div>
        <h4>Teams (Teams.js with hooks)</h4>
        <Link to="/teams/add-team">
            <button>Add a Team</button>
        </Link>
        {teams.map(team => (
          <TeamItem key={team.id} team={team} />
        ))}
      </div>
    </Fragment>
  );
};

Teams.propTypes = {
  teams: PropTypes.array.isRequired
};

export default Teams;