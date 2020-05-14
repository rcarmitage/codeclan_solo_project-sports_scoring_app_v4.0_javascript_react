// import React from 'react';
// import LeagueTableCell from './LeagueTableCell';
// // import PropTypes from 'prop-types';

// function LeagueTableData({ leagueTableTeams, meta }) {
//   const headerOrder = meta.map(m => m.key);
//   return (
//     <tbody>
//       {
//         leagueTableTeams.map((row) => (
//           <tr className="table-row">
//             {
//               row.map((_, i) => <LeagueTableCell leagueTableTeams={row.find(r => r.key === headerOrder[i])} />)
//             }
//           </tr>
//         ))
//       }
//     </tbody>
//   )
// }

// // const LeagueTableItem = ({ leagueTableTeam: { name, played, won, lost, points } }) => {
// //   return (
// //     <Fragment>
// //       <div className="league-table">
// //         <div className="league-table-team-entry">
// //           <p className="league-table-team-name">{name}</p>
// //           <p className="league-table-team-played">{played}</p>
// //           <p className="league-table-team-won">{won}</p>
// //           <p className="league-table-team-lost">{lost}</p>
// //           <p className="league-table-team-points">{points}</p>
// //         </div>  
// //       </div>
// //     </Fragment>
// //   );
// // };

// // LeagueTableItem.propTypes = {
// //   leagueTableTeam: PropTypes.object.isRequired
// // };

// export default LeagueTableData;
