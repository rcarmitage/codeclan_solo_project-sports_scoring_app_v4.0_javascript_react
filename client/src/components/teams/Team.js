import React, { Fragment, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Team = ({ team, getTeam, match }) => {
  useEffect(() => {
    getTeam(match.params.id);
    // eslint-disable-next-line
  }, []);

  const {
    team_id,
    name
  } = team;

  return (
    <Fragment>
      <div>
        <h4>Team (Team.js)</h4>
        <h3>Name: {name}</h3>
        <h3>ID: {team_id}</h3>
        {/* <h5>params ID: {params.id}</h5> */}
        <p>(Played/Won/Lost to come from 'fixtures' table, Points = Won)</p>
        <p>(Fixtures to be listed here)</p>
      </div>
      {/* <div>
        <Link to={`/teams/${team.id}/edit`}>
          <button>Edit</button>
        </Link>
        <Link to={`/teams/${team.id}/delete`}>
          <button>Delete</button>
        </Link>
      </div> */}
    </Fragment>
  );
};

Team.propTypes = {
  team: PropTypes.object.isRequired,
  getTeam: PropTypes.func.isRequired
};

export default Team;
