import React from "react";

import Leagues from "./Leagues/Leagues";
import Countries from "./Countries/Countries";

import { useSelector } from "react-redux";

const LeftContainer = () => {
  const displayComponent = useSelector(
    (store) => store.display.displayComponent
  );

  const display = useSelector((store) => store.display);

  console.log(display);

  return (
    <div className="bg-neutral w-44 rounded-2xl p-4 hidden md:block">
      {displayComponent === "COUNTRIES" ? <Countries /> : <Leagues />}
    </div>
  );
};

export default LeftContainer;
