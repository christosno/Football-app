import React from 'react';
import { matchData } from '../dummy-data';
import Match from './Match';

const Matches = () => {
  console.log(matchData);
  return (
    <>
      {matchData.map((fixture) => (
        <Match key={fixture.fixture.id} matchData={fixture} />
      ))}
    </>
  );
};

export default Matches;
