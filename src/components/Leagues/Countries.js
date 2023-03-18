import React from "react";
import Country from "./Country";
import { countriesData } from "../../dummy-data";

const Countries = () => {
  return (
    <>
      {countriesData.map((countrieData) => {
        return (
          <Country
            code={countrieData.code}
            flag={countrieData.flag}
            name={countrieData.name}
          />
        );
      })}
    </>
  );
};

export default Countries;
