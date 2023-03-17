import { React } from 'react';
import { Table } from 'react-daisyui';

function Match({ matchData }) {
  return (
    <>
      <Table.Row className="cursor-pointer">
        <span>{matchData.fixture.date.substring(11, 16)}</span>
        <span>{matchData.league.name}</span>
        <span>{matchData.teams.home.name}</span>
        <span>{matchData.teams.away.name}</span>
        <span>
          {matchData.goals.home} - {}
          {matchData.goals.away}
        </span>
      </Table.Row>
    </>
  );
}

export default Match;
