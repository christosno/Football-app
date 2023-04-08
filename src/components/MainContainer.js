import React from "react";

import Countries from "./Countries/Countries";
import Leagues from "./Leagues/Leagues";
import Matches from "./Matches/Matches";
import DatePickerComp from "./DatePickerComp";

import { useSelector } from "react-redux";

function MainContainer() {
  const display = useSelector((store) => store.display);

  const { isLeagueButtonCliked, displayComponent } = display;

  console.log(display);

  return (
    <div className="bg-neutral w-full md:w-[33rem] rounded-2xl p-8 mx-2">
      <div className="bg-sky-800/20 w-full rounded-2xl p-2 mb-4 ">
        <DatePickerComp />
      </div>
      {!isLeagueButtonCliked ? (
        <Matches />
      ) : displayComponent === "MATCHES" ? (
        <Matches />
      ) : displayComponent === "LEAGUES" ? (
        <Leagues />
      ) : displayComponent === "COUNTRIES" ? (
        <Countries />
      ) : null}
    </div>
  );
}

export default MainContainer;
