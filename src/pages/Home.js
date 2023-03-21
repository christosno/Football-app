import React, { useState, useEffect } from "react";
import Countries from "../components/Leagues/Countries";
import { Button } from "react-daisyui";
import Matches from "../components/Matches";

const Home = () => {
  const [toggleLeagues, setToggleLeagues] = useState(false);
  // const [data, setData] = useState([]);

  // const options = {
  //   method: "GET",
  //   headers: {
  //     "X-RapidAPI-Key": process.env.REACT_APP_X_RAPIDAPI_KEY,
  //     "X-RapidAPI-Host": process.env.REACT_APP_X_RAPIDAPI_HOST,
  //   },
  // };

  // useEffect(() => {
  //   // fetchData();
  // }, []);

  // const fetchData = async () => {
  //   try {
  //     const fetchedData = await fetch(
  //       "https://api-football-v1.p.rapidapi.com/v3/fixtures?date=2023-03-15",
  //       options
  //     );

  //     const finalData = await fetchedData.json();

  //     console.log(finalData);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

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
          <Countries toggleLeaguesHandler={() => {}} />
        </div>
        <div className="bg-neutral w-full md:w-[33rem] rounded-2xl p-8 mx-2">
          {toggleLeagues ? (
            <Countries toggleLeaguesHandler={setToggleLeagues} />
          ) : (
            <Matches />
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
