import React from 'react';

function LeagueTableCell ({ leagueTableTeams }) {
  return (
    <td className="table-cell">
      {leagueTableTeams}
    </td>
  );
};

export default LeagueTableCell;