import React, { useState, useEffect } from "react";
import Countries from "../components/Leagues/Countries";
import Matches from "../components/Matches";

const Home = () => {
  return (
    <>
      <div className="flex w-auto md:space-x-4 justify-center align-top">
        <div className="bg-neutral w-44 rounded-2xl p-4 hidden md:block">
          <Countries />
        </div>
        <div className="bg-neutral w-[33rem] rounded-2xl p-8 ">
          <Matches />
        </div>
      </div>
    </>
  );
};

export default Home;
