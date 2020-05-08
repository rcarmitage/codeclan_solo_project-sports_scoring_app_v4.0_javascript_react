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

  // return (
  //   <Fragment>
  //     <div>
  //       <h4>Teams (TeamsComponent with hooks)</h4>
  //       {teams.map(team => (
  //         <div className="teams-container" key={team.id}>
  //           <div className="teams-container-top-row">
  //             <p className="team-name">{team.name}</p>
  //           </div>
  //           <div className="teams-container-middle-row">
  //             <Link className="btn-team-details" to={`/teams/${team.id}`}>
  //               <button>Team Details</button>
  //             </Link>
  //           </div>
  //           <div className="teams-container-bottom-row">
  //             <Link className="btn-edit-team" to={`/teams/${team.id}/edit`}>
  //               <button>Edit</button>
  //             </Link>
  //             <Link className="btn-delete-team" to={`/teams/${team.id}/delete`}>
  //               <button>Delete</button>
  //             </Link>
  //           </div>
  //         </div>
  //       ))}
  //     </div>
  //   </Fragment>
  // );
};

Teams.propTypes = {
  teams: PropTypes.array.isRequired
};

export default Teams;