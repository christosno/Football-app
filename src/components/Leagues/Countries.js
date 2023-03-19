import React, { useState } from "react";
import CountryLeagues from "./CountryLeagues";
import { countriesData, countryLeagues } from "../../dummy-data";
import { Divider } from "react-daisyui";
import Search from "../Search";

const Countries = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);

  return (
    <><div className="mt-3">
      {!selectedCountry ? (
        
          <Search />
      ) : (
        <div className="flex items-center justify-between px-2 cursor-pointer">
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
          <span className="text-center text-neutral-content text-lg font-medium">
            {selectedCountry}
          </span>
        </div>
      )}
      </div>
      <Divider />
    
      {!selectedCountry
        ? countriesData.map((countrieData) => {
            return (
              <CountryLeagues
                clickCountryHandler={setSelectedCountry}
                id={countrieData.code}
                logo={countrieData.flag}
                name={countrieData.name}
              />
            );
          })
        : countryLeagues.map((countryLeague) => {
            return (
              <CountryLeagues
                clickCountryHandler={() => {}}
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
