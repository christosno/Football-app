import React, { useState } from "react";
import CountryLeagues from "./CountryLeagues";
import useFetchCountries from "../../hooks/useFetchCountries";
import useFetchCountryLeagues from "../../hooks/useFetchCountryLeagues";
import { Divider } from "react-daisyui";
import Search from "../Search";
import DisplaySelectedCountry from "./DisplaySelectedCountry";

const Countries = ({ toggleLeaguesHandler, isLeagueOpen }) => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [leagueId, setLeagueId] = useState(null);

  console.log(selectedCountry);

  const [countriesIsLoading, countriesData, countriesIsError, countriesError] =
    useFetchCountries();

  const [leagueData, leagueIsLoading, leagueIsError, leagueErro] =
    useFetchCountryLeagues(selectedCountry);

  if (countriesIsLoading || leagueIsLoading) {
    return <p>Loading...</p>;
  }

  if (countriesIsError || leagueIsError) {
    return <p>{countriesError.message}</p>;
  }

  return (
    <>
      <div className="mt-3">
        {!selectedCountry ? (
          <Search />
        ) : (
          <DisplaySelectedCountry
            selectedCountry={selectedCountry}
            setSelectedCountry={setSelectedCountry}
          />
        )}
      </div>
      <Divider />

      {!selectedCountry
        ? countriesData.map((countryData) => {
            return (
              <CountryLeagues
                isLeagueOpen={isLeagueOpen}
                toggleLeaguesHandler={() => {}}
                clickCountryHandler={setSelectedCountry}
                id={null}
                logo={countryData.flag}
                name={countryData.name}
                key={countryData.name}
              />
            );
          })
        : leagueData.map((countryLeague) => {
            return (
              <CountryLeagues
                isLeagueOpen={isLeagueOpen}
                toggleLeaguesHandler={toggleLeaguesHandler}
                key={countryLeague.league.id}
                clickCountryHandler={() => {
                  console.log("league clicked", countryLeague.league.id);
                  setLeagueId(countryLeague.league.id);
                }}
                id={countryLeague.league.id}
                logo={countryLeague.league.logo}
                name={countryLeague.league.name}
              />
            );
          })}
    </>
  );
};

export default Countries;
