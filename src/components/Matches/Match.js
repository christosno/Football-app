import React from "react";
import { Divider, Mask } from "react-daisyui";
import { months } from "../../data/Months";

function Match({ matchData }) {
  return (
    <>
      <div className="w-full flex justify-center cursor-pointer">
        <div className="flex flex-col w-1/6 items-center justify-center text-xs">
          {matchData?.fixture.status.short !== "LIVE" && (
            <div>
              {matchData?.fixture.date.substring(8, 10)}-
              {months[+matchData?.fixture.date.substring(5, 7) - 1]}
            </div>
          )}
          <div className="mt-1">
            {matchData?.fixture.status.short === "NS"
              ? matchData?.fixture.date.substring(11, 16)
              : matchData?.fixture.status.short === "LIVE"
              ? `${matchData?.fixture.status.elapsed}'`
              : matchData?.fixture.status.short}
          </div>
        </div>
        <div className="flex flex-col w-4/6 pl-6 text-sm">
          <div className="w-6 h-6 flex">
            <Mask src={matchData?.teams.home.logo} className="rounded" />
            <div className="ml-4 whitespace-nowrap">
              {matchData?.teams.home.name}
            </div>
          </div>
          <div className="w-6 h-6 flex mt-1 text-sm ">
            <Mask src={matchData?.teams.away.logo} className="rounded" />
            <div className="ml-4 whitespace-nowrap">
              {matchData?.teams.away.name}
            </div>
          </div>
        </div>
        <div className="flex flex-col w-1/6 items-end pr-6 text-sm font-semibold">
          <div>{matchData?.goals.home}</div>
          <div className="mt-1">{matchData?.goals.away}</div>
        </div>
      </div>
      <Divider className="m-1" />
    </>
  );
}

export default Match;
