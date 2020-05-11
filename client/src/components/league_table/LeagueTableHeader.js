import React from 'react';
import LeagueTableCell from './LeagueTableCell';

function LeagueTableHeader({ headers }) {
  return (
    <thead className="table-row">
      {
        headers.map((d) => <LeagueTableCell data={d} />)
      }
    </thead>
  );
};

export default LeagueTableHeader;