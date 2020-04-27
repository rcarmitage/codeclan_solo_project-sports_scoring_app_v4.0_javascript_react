import React, { Component, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import TeamList from './TeamList';

function TeamsComponent() {

  useEffect(() => {
    fetchTeams();
  }, [])

  const [teams, setTeams] = useState([]);

  const fetchTeams = async () => {
    const data = await fetch('http://localhost:3005/api/teams');
    
    const teams = await data.json();
    console.log(teams);
    setTeams(teams);
  }

  return (
    <div>
      <h4>(TeamsComponent with hooks)</h4>
      {teams.map(team => (
        <p key={team.id}>
          <Link to={`/teams/${team.id}`}>{team.name}</Link>
        </p>
      ))}
    </div>
  );
}

// class TeamsComponent extends Component {
//   render() {
//     return (
//       <div>
//         <h4>Teams (TeamsComponent)</h4>
//         <Link to="/add-team">
//           <button>Add a Team</button>
//         </Link>

//         <TeamList 
//           teams={this.props.teams}
//           handleTeamSelected={this.props.handleTeamSelected}
//           editTeam={this.props.editTeam}
//         />
//       </div>
//     );
//   }
// }

export default TeamsComponent;