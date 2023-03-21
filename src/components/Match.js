import React, { useState } from "react";
import { Divider, Mask } from "react-daisyui";
import { months } from "../data/Months";

function Match({ matchData }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className="w-full flex justify-center cursor-pointer"
        onClick={handleToggle}
      >
        <div className="flex flex-col w-1/6 items-center justify-center text-sm">
          {matchData.fixture.status.short !== "LIVE" && (
            <div>
              {matchData.fixture.date.substring(8, 10)}-
              {months[+matchData.fixture.date.substring(5, 7) - 1]}
            </div>
          )}
          <div className="mt-1">
            {matchData.fixture.status.short === "NS"
              ? matchData.fixture.date.substring(11, 16)
              : matchData.fixture.status.short === "LIVE"
              ? `${matchData.fixture.status.elapsed}'`
              : matchData.fixture.status.short}
          </div>
        </div>
        <div className="flex flex-col w-4/6 pl-8">
          <div className="w-6 h-6 flex">
            <Mask src={matchData.teams.home.logo} className="rounded" />
            <div className="ml-4 whitespace-nowrap">
              {matchData.teams.home.name}
            </div>
          </div>
          <div className="w-6 h-6 flex mt-1">
            <Mask src={matchData.teams.away.logo} className="rounded" />
            <div className="ml-4 whitespace-nowrap">
              {matchData.teams.away.name}
            </div>
          </div>
        </div>
        <div className="flex flex-col w-1/6 items-end pr-8">
          <div>{matchData.goals.home}</div>
          <div className="mt-1">{matchData.goals.away}</div>
        </div>
      </div>
      <Divider />
    </>
  );
}

export default Match;
