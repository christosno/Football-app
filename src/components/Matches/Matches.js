import React, { useState, useEffect } from "react";
import useFetchMatchesByDate from "../../hooks/useFetchMatchesByDate";
import Match from "./Match";
import { Button } from "react-daisyui";
import { useSelector } from "react-redux";

const Matches = () => {
  const [moreData, setMoreData] = useState(1);
  const [desplayMoreMatchesButton, setDesplayMoreMatchesButton] =
    useState(true);

  const leagueId = useSelector((store) => store.display.leagueId);

  const today = new Date();
  const currentDate = today.toISOString().slice(0, 10);

  const dayBefore = new Date(today);
  dayBefore.setDate(today.getDate() - 1);
  const dayBeforeDate = dayBefore.toISOString().slice(0, 10);

  const dayAfter = new Date(today);
  dayAfter.setDate(today.getDate() + 1);
  const dayAfterDate = dayAfter.toISOString().slice(0, 10);

  const currentYear = currentDate.slice(0, 4);

  const [isLoading, data, isError, error] = useFetchMatchesByDate(
    currentDate,
    leagueId,
    currentYear,
    dayBeforeDate,
    dayAfterDate
  );

  const moreMatchesButtonClickHandler = () => {
    setMoreData((prev) => prev + 1);
  };

  const endIndex =
    data?.length < 100 * moreData ? data?.length : 100 * moreData;

  const displayData = data?.slice(1, endIndex);

  useEffect(() => {
    setDesplayMoreMatchesButton(() => data?.length > 100 * moreData);
  }, [moreData, data]);

  console.log(data);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>{error.message}</p>;
  }

  return (
    <>
      {displayData.map((fixture) => (
        <Match key={fixture.fixture.id} matchData={fixture} />
      ))}
      {desplayMoreMatchesButton && (
        <Button
          onClick={moreMatchesButtonClickHandler}
          className=""
          fullWidth="true"
          variant="outline"
          size="sm"
          children="More Matches"
          animation="true"
          responsive="true"
          active="false"
        />
      )}
    </>
  );
};

export default Matches;
