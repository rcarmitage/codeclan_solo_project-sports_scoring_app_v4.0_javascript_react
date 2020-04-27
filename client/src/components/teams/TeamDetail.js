import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Team({ match }) {

  useEffect(() => {
    fetchTeam();
    console.log(match);
  }, []);

  const [team, setTeam] = useState({});

  const fetchTeam = async () => {
    const fetchTeam = await fetch(`http://localhost:3005/api/teams/${match.params.id}`);
    const team = await fetchTeam.json();
    setTeam(team);
    console.log(team);
  }

  return (
    <Fragment>
      <div>
        <h4>Team (TeamDetail with hooks)</h4>
        <h5>Name: {team.name}</h5>
        <h6>Played: {team.played}</h6>
        <h6>Won: {team.won}</h6>
        <h6>Lost: {team.lost}</h6>
        <h6>Points: {team.points}</h6>
        <p>(Results of last 5 games go here)</p>
      </div>
      <div>
        <Link to={`/teams/${team.id}/edit`}>
          <button>Edit</button>
        </Link>
        <Link to={`/teams/${team.id}/delete`}>
          <button>Delete</button>
        </Link>
      </div>
    </Fragment>
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