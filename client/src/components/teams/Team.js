import React, { Fragment, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

const Team = ({ team, getTeam, match }) => {
  useEffect(() => {
    getTeam(match.params.slug);
    // eslint-disable-next-line
  }, []);

  const {
    id,
    name,
    played,
    won,
    lost,
    points,
    slug
  } = team;

  return (
    <Fragment>
      <div>
        <h4>Team (Team.js)</h4>
        <h5>Name: {name}</h5>
        <h5>ID: {id}</h5>
        {/* <h5>params ID: {params.id}</h5> */}
        <h6>Played: {played}</h6>
        <h6>Won: {won}</h6>
        <h6>Lost: {lost}</h6>
        <h6>Points: {points}</h6>
        <h6>Slug: {slug}</h6>
        <p>(Results of last 5 games go here)</p>
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

// Team.propTypes = {
//   team: PropTypes.object.isRequired,
//   getTeam: PropTypes.func.isRequired
// };

export default Team;