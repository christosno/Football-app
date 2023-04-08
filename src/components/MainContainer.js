import React from "react";

import Countries from "./Countries/Countries";
import Leagues from "./Leagues/Leagues";
import Matches from "./Matches/Matches";

import { useSelector } from "react-redux";

function MainContainer() {
  // const displayComponent = useSelector(
  //   (store) => store.display.displayComponent
  // );

  // console.log("displayComponent", displayComponent);

  // const isLeagueButtonCliked = useSelector(
  //   (store) => store.display.isLeagueButtonCliked
  // );

  // console.log("isLeagueButtonCliked", isLeagueButtonCliked);

  const display = useSelector((store) => store.display);

  const { isLeagueButtonCliked, displayComponent } = display;

  console.log(display);

  // let componentToDisplay;

  // if (isLeagueButtonCliked) {
  //   componentToDisplay = <Matches />;
  // } else {
  //   if (displayComponent === "MATCHES") {
  //     componentToDisplay = <Matches />;
  //   } else if (displayComponent === "COUNTRIES") {
  //     componentToDisplay = <Countries />;
  //   } else if (displayComponent === "LEAGUES") {
  //     componentToDisplay = <Countries />;
  //   }
  // }

  return (
    <div className="bg-neutral w-full md:w-[33rem] rounded-2xl p-8 mx-2">
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
