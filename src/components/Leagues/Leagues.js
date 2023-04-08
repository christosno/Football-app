import React from "react";
import useFetchCountryLeagues from "../../hooks/useFetchCountryLeagues";
import { Divider } from "react-daisyui";
import DisplaySelectedCountry from "../Countries/DisplaySelectedCountry";
import { useSelector } from "react-redux";
import League from "./League";

const Leagues = () => {
  const selectedCountry = useSelector((store) => store.display.selectedCountry);

  const [leagueData, leagueIsLoading, leagueIsError, leagueErro] =
    useFetchCountryLeagues(selectedCountry);

  if (leagueIsLoading) {
    return <p>Loading...</p>;
  }

  if (leagueIsError) {
    return <p>{leagueErro.message}</p>;
  }

  return (
    <>
      <div className="mt-3">
        <DisplaySelectedCountry selectedCountry={selectedCountry} />
      </div>
      <Divider />
      {leagueData.map((countryLeague) => {
        return (
          <League
            key={countryLeague.league.id}
            id={countryLeague.league.id}
            logo={countryLeague.league.logo}
            name={countryLeague.league.name}
          />
        );
      })}
    </>
  );
};

export default Leagues;
