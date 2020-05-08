import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const TeamItem = ({ team: { id, name } }) => {
  return (
    <div>
      <div>
        <h3>{name}</h3>
      </div>
      <div>
        <Link to={`/teams/${id}`}>
          Team Details
        </Link>
      </div>
    </div>
  );

  // TeamItem.propTypes = {
  //   team: PropTypes.object.isRequired
  // };
};

export default TeamItem;