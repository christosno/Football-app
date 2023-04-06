import React, { useState, useEffect } from "react";
import Countries from "../components/Leagues/Countries";
import { Button } from "react-daisyui";
import Matches from "../components/Matches";

const Home = () => {
  const [toggleLeagues, setToggleLeagues] = useState(false);

  const leagueButtonClickHandler = () => {
    setToggleLeagues(!toggleLeagues);
  };

  return (
    <>
      <div className="mx-4 my-2 md:hidden">
        <Button
          onClick={leagueButtonClickHandler}
          className=""
          fullWidth="true"
          variant="outline"
          size="sm"
          children="Leagues"
          animation="true"
          responsive="true"
          active={toggleLeagues}
        />
      </div>
      <div className="flex w-auto md:space-x-4 justify-center align-top">
        <div className="bg-neutral w-44 rounded-2xl p-4 hidden md:block">
          <Countries
            isLeagueOpen={toggleLeagues}
            toggleLeaguesHandler={() => {}}
          />
        </div>
        <div className="bg-neutral w-full md:w-[33rem] rounded-2xl p-8 mx-2">
          {toggleLeagues ? (
            <Countries
              isLeagueOpen={toggleLeagues}
              toggleLeaguesHandler={setToggleLeagues}
            />
          ) : (
            <Matches />
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
