import React, { useEffect, useState } from 'react';
import LeagueTableHeader from './LeagueTableHeader';
import LeagueTableData from './LeagueTableData';
// import PropTypes from 'prop-types';

const meta = [
  {
    key: "id",
    text: "ID",
  },
  {
    key: "name",
    text: "Team",
  },
  {
    key: "played",
    text: "Played",
  },
  {
    key: "won",
    text: "Won",
  },
  {
    key: "lost",
    text: "Lost",
  },
  {
    key: "points",
    text: "Points",
  }
]

function normalizeData(leagueTableData) {
  return leagueTableData.map(td => {
    const keys = Object.keys(td);
    return keys.map(key => ({ key, text: td[key] }));
  })
}

function LeagueTable({ normalizeData }) {
  const [headerMeta, setHeaderMeta] = useState(meta);
  const [leagueTableData, setLeagueTableData] = useState([]);

  // setHeaderMeta(
  //     (currentHeaderMeta) => currentHeaderMeta.map((m) => m.sort ? { ...m, sortFunc: () => sortFunc(m) } : m)
  //   );
  // }, [sortBy]);

  useEffect(() => {
    // normalize data
    setLeagueTableData(normalizeData(leagueTableData), meta);
  }, []);

  return (
    <div className="container">
      <LeagueTableHeader headers={headerMeta} />
      <LeagueTableData leagueTableData={leagueTableData} meta={meta} />
    </div>
  );

  // renderTableData() {
  //   return leagueTableTeams.map((leagueTableTeam, index) => {
  //     const { id, name, played, won, lost, points } = leagueTableTeam
  //     return (
  //       <tr key={id}>
  //       <td>{id}</td>
  //       <td>{name}</td>
  //       <td>{played}</td>
  //       <td>{won}</td>
  //       <td>{lost}</td>
  //       <td>{points}</td>
  //     </tr>
  //     )
  //   })
  // }
  
  // return (
  //   <Fragment>
  //     <div>
  //       <h4>League Table (LeagueTable.js with hooks)</h4>
  //       <table>
  //         <thead>
  //           <tr>
  //             <th></th>
  //             <th> Team </th>
  //             <th> Played </th>
  //             <th> Won </th>
  //             <th> Lost </th>
  //             <th> Points </th>
  //           </tr>
  //         </thead>
  //         <tbody>
  //         {leagueTableTeams.map(leagueTableTeam => (
  //           <LeagueTableItem key={leagueTableTeam.id} leagueTableTeam={leagueTableTeam} />
  //         ))}
  //         </tbody>
  //       </table>
  //     </div>
  //   </Fragment>
  // );

  // return (
  //   <React.Fragment>
      // <table>
      //   <thead>
      //     <tr>
      //       <th></th>
      //       <th> Team </th>
      //       <th> Played </th>
      //       <th> Won </th>
      //       <th> Lost </th>
      //       <th> Points </th>
      //     </tr>
      //   </thead>
      //   <tbody>
      //     {leagueNodes}
      //   </tbody>
      // </table>
  //   </React.Fragment>
  // )

  // let counter = 1;

  // return (
  //   <Fragment>
  //     <h4>League Table</h4>
  //     <div className="league-table-container">
  //   <div className="league-table">
  //     <div className="league-table-top-row">
  //       <p className="league-table-position"></p>
  //       <p className="league-table-team-name">Team</p>
  //       <p className="league-table-team-played">Played</p>
  //       <p className="league-table-team-won">Won</p>
  //       <p className="league-table-team-lost">Lost</p>
  //       <p className="league-table-team-points">Points</p>
  //     </div>
  //     <div class="league-table-team-entry">
  //       <% @teams.each do |team| %> 
  //         <p class="league-table-position">{counter}</p>
  //         <p class="league-table-team-name">{team.name}</p>
  //         <p class="league-table-team-played">{team.played}</p>
  //         <p class="league-table-team-won">{team.won}</p>
  //         <p class="league-table-team-lost">{team.lost}</p>
  //         <p class="league-table-team-points">{team.points}</p>
  //         <% counter += 1 %>
  //       <% end %>
  //     </div>
  //   </div>
  // </div>
  //   </Fragment>
  // );
};

// LeagueTable.propTypes = {
//   leagueTableTeams: PropTypes.array.isRequired
// };

export default LeagueTable;




//  useEffect(() => {
//    // normalize data
//    setTableData(normalizeData(data), meta);
//  }, []);

//  useEffect(() => {
//    // sort
//    setTableData(normalizeData(data.sort((d1, d2) => compare[sortBy.order](d1[sortBy.key], d2[sortBy.key]))));
//  }, [sortBy])


//  return (
//    <div className="container">
//      <TableHeader headers={headerMeta} />
//      <TableData data={tableData} meta={meta} />
//      <Paginator page={currentPage} setPage={setCurrentPage} size={Math.ceil(data.length / pageSize)} />
//    </div>
//  );
// }