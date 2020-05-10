import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const FixtureItem = ({ fixture: { id, team_a, team_b, winning_team } }) => {
  return(
    <Fragment>
      <div className="fixtures-container">

      <div className="fixtures-container-top-row">
        <p className="team-a">{team_a.name}</p>
        <p className="vs">vs</p>
        <p className="team-b">{team_b.name}</p>
      </div>

      <div className="fixtures-container-middle-row">
        <p className="winner-text">Winner:</p>
        <p className="winner-team">{winning_team.name}</p>
      </div>

      <div className="fixtures-container-bottom-row">
        <Link class="btn-edit-fixture" to={`/fixtures/${id}/edit`}>EDIT</Link>
        <Link  class="btn-delete-fixture" to={`/fixtures/${id}/delete`}>DELETE</Link>
      </div>

      </div>
    </Fragment>
  );
};

export default FixtureItem;