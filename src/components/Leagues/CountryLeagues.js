import React from "react";
import { Mask } from "react-daisyui";

const CountryLeagues = ({ name, logo, id, clickCountryHandler }) => {
  return (
    <div
      onClick={() => {
        clickCountryHandler(name);
      }}
      className="flex w-full p-2 mb-1 space-x-4 justify-strech items-center align-middle hover:bg-base-200 rounded-xl cursor-pointer "
    >
      <div className="w-1/4">
        <Mask src={logo} className="rounded" />
      </div>
      <div className="w-3/4 text-neutral-content text-sm">
        {name?.length > 11 ? name.slice(0, 10) + "..." : name}
      </div>
    </div>
  );
};

export default CountryLeagues;
