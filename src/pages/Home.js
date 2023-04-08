import React from "react";
import { Button } from "react-daisyui";
import { useDispatch, useSelector } from "react-redux";
import {
  setIsLeagueButtonCliked,
  setDisplayComponent,
} from "../store/displaySlice";
import LeftContainer from "../components/LeftContainer";
import MainContainer from "../components/MainContainer";

const Home = () => {
  const dispatch = useDispatch();

  const leagueButtonClickHandler = () => {
    console.log("League button clicked");
    dispatch(setIsLeagueButtonCliked());
    dispatch(setDisplayComponent("COUNTRIES"));
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
        />
      </div>
      <div className="flex w-auto md:space-x-4 justify-center align-top">
        <LeftContainer />
        <MainContainer />
      </div>
    </>
  );
};

export default Home;
