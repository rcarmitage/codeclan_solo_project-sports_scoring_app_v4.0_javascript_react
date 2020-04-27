import React, { Component } from 'react';
import TeamList from './teams/TeamList';
import TeamDetail from '../components/teams/TeamDetail';

// class LeagueTable extends Component {
//   render() {
//     const teamsNodes = this.props.teams.map (team => {
//       return (
//         <TeamDetail key={team.id}>
//           {team.name}
//         </TeamDetail>
//       )
//     })

//     return (
//       <div className="league-table">
//         {teamsNodes}
//       </div>
//     )
//   }
// }

const LeagueTable = ({ teams }) => {
  const teamsNodes = teams.map((team) => {
    return (
      <TeamDetail
        key={team.id}
        team={team}
      />
    )
  })
  return (
    <React.Fragment>
      <table>
        <thead>
          <tr>
            <th> Team </th>
            <th> Played </th>
            <th> Won </th>
            <th> Lost </th>
            <th> Points </th>
          </tr>
        </thead>
        <tbody>
          {teamsNodes}
        </tbody>
      </table>
    </React.Fragment>
  )
}

// TO DISPLAY

// const TeamList = ({ teams }) => {
//   const teamsNodes = teams.map((team) => {
//     return (
//       <TeamDetail
//         key={team.id}
//         team={team}
//       />
//     )
//   })
//   return (
//     <React.Fragment>
//       <table>
//         <thead>
//           <tr>
//             <th> Team </th>
//             <th> Played </th>
//             <th> Won </th>
//             <th> Lost </th>
//             <th> Points </th>
//           </tr>
//         </thead>
//         <tbody>
//           {teamsNodes}
//         </tbody>
//       </table>
//     </React.Fragment>
//   )
// }

// const TeamDetail = ({ team }) => {

//   return (
//     <tr>
//       <td>{team.name}</td>
//       <td>{team.played}</td>
//       <td>{team.won}</td>
//       <td>{team.lost}</td>
//       <td>{team.points}</td>
//     </tr>
//   )
// }

export default LeagueTable;