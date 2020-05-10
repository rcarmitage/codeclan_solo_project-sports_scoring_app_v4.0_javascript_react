import React, { Fragment, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

const Fixture = ({ fixture, getFixture, match }) => {
  useEffect(() => {
    getFixture(match.params.id);
    // eslint-disable-next-line
  }, []);

  const {
    id,
    team_a,
    team_b,
    winning_team,
    losing_team,
    slug
  } = fixture;

  return (
    <Fragment>
      <div>
        <h4>Fixture (Fixture.js)</h4>
        <h5>Fixture: {id}</h5>
        {/* <h5>params ID: {params.id}</h5> */}
        <h6>Team A: {team_a}</h6>
        <h6>Team B: {team_b}</h6>
        <h6>Winning Team: {winning_team}</h6>
        <h6>Losing Team: {losing_team}</h6>
        <h6>Slug: {slug}</h6>
      </div>
      {/* <div>
        <Link to={`/fixtures/${fixture.id}/edit`}>
          <button>Edit</button>
        </Link>
        <Link to={`/fixtures/${fixture.id}/delete`}>
          <button>Delete</button>
        </Link>
      </div> */}
    </Fragment>
  );
};

// Fixture.propTypes = {
//   fixture: PropTypes.object.isRequired,
//   getFixture: PropTypes.func.isRequired
// };

export default Fixture;