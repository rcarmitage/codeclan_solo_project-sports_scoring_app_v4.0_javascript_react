import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const FixtureItem = ({ fixture: { id, team_a, team_b, winning_team } }) => {
  return(
    <Fragment>
      <div className="fixtures-container">

      <div className="fixtures-container-top-row">
        <p className="team-a">{team_a}</p>
        <p className="vs">vs</p>
        <p className="team-b">{team_b}</p>
      </div>

      <div className="fixtures-container-middle-row">
        <p className="winner-text">Winner:</p>
        <p className="winner-team">{winning_team}</p>
      </div>

      <div className="fixtures-container-bottom-row">
        <Link className="btn-edit-fixture" to={`/fixtures/${id}/edit`}>
          <button>EDIT</button>
        </Link>
        <Link  className="btn-delete-fixture" to={`/fixtures/${id}/delete`}>
        <button>DELETE</button>
        </Link>
      </div>

      </div>
    </Fragment>
  );
};

FixtureItem.propTypes = {
  fixture: PropTypes.object.isRequired
};

export default FixtureItem;
