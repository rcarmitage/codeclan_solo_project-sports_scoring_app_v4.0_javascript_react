import React, { Component, Fragment, useState, useEffect } from 'react';
// import { useHistory } from 'react-router-dom';

function Team() {

  useEffect(() => {
    fetchTeams();
  }, [])

  const [team, setTeam] = useState({});

  const fetchTeam = async () => {

  }

  return (
    <div>
      <h4>Team (TeamDetail with hooks)</h4>
    </div>
  );
}

// const TeamDetail = ({ team }) => {

//   // let history = useHistory();

//   // function handleClick() {
//   //   handleTeamSelected(team.id);
//   //   // history.push(`/teams/${team.id}`)
//   // }

//   return (
//     <Fragment>
//       <div className="teams-container">
//         <div className="teams-container-top-row">
//           <p className="team-name">{team.name}</p>
//         </div>
//         <div className="teams-container-middle-row">
//           <Link className="btn-team-details" to={`/teams/${team.id}`}>
//             <button>Team Details</button>
//           </Link>
//         </div>
//         <div className="teams-container-bottom-row">
//           <Link className="btn-edit-team" to={`/teams/${team.id}/edit`}>
//             <button>Edit</button>
//           </Link>
//           <Link className="btn-delete-team" to={`/teams/${team.id}/delete`}>
//             <button>Delete</button>
//           </Link>
//         </div>
//       </div>
//     </Fragment>
//   )
// }

export default Team;