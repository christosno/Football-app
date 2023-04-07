import React, { useState } from "react";
import CountryLeagues from "./CountryLeagues";
import useFetchCountries from "../../hooks/useFetchCountries";
import useFetchCountryLeagues from "../../hooks/useFetchCountryLeagues";
// import { countryLeagues } from "../../dummy-data";
import { Divider } from "react-daisyui";
import Search from "../Search";

const Countries = ({ toggleLeaguesHandler, isLeagueOpen }) => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [leagueId, setLeagueId] = useState(null);
  const [showMore, setShowMore] = useState(false);

  console.log(selectedCountry);

  const [countryIsLoading, countryData, countryIsError, countryError] =
    useFetchCountries();

  const [leagueData, leagueIsLoading, leagueIsError, leagueErro] =
    useFetchCountryLeagues(selectedCountry);

  console.log("00000000000000----------", leagueData);

  const finalCountriesData = !showMore
    ? countryData?.slice(0, 50)
    : countryData;

  const finalCountryLeagues = !showMore ? leagueData?.slice(0, 40) : leagueData;
  // const finalCountryLeagues = leagueData;

  if (countryIsLoading || leagueIsLoading) {
    return <p>Loading...</p>;
  }

  if (countryIsError || leagueIsError) {
    return <p>{countryError.message}</p>;
  }

  return (
    <>
      <div className="mt-3">
        {!selectedCountry ? (
          <Search />
        ) : (
          <div className="flex items-center px-2 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
              onClick={() => setSelectedCountry(null)}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
              />
            </svg>
            <span className="text-center ml-4 text-neutral-content justify-self-start text-lg font-medium">
              {selectedCountry}
            </span>
          </div>
        )}
      </div>
      <Divider />

      {!selectedCountry
        ? finalCountriesData.map((countryData) => {
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
        : finalCountryLeagues.map((countryLeague) => {
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
      {!showMore && (
        <p
          onClick={() => setShowMore(true)}
          className="cursor-pointer text-center text-ellipsis text-sm p-4 italic hover:text-white"
        >
          show more
        </p>
      )}
    </>
  );
};

export default Countries;
