import React from "react";

import Country from "./Country";
import Search from "../Search";

import useFetchCountries from "../../hooks/useFetchCountries";

const Countries = () => {
  const [countriesIsLoading, countriesData, countriesIsError, countriesError] =
    useFetchCountries();

  if (countriesIsLoading) {
    return <p>Loading...</p>;
  }

  if (countriesIsError) {
    return <p>{countriesError.message}</p>;
  }

  return (
    <>
      <Search />
      {countriesData.map((countryData) => {
        return (
          <Country
            flag={countryData.flag}
            name={countryData.name}
            key={countryData.name}
          />
        );
      })}
    </>
  );
};

export default Countries;
