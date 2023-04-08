import React, { useState, useEffect } from "react";
// import { matchData } from "../dummy-data";
import useFetchMatchesByDate from "../../hooks/useFetchMatchesByDate";
import Match from "./Match";
import { Button } from "react-daisyui";

const Matches = () => {
  const [moreData, setMoreData] = useState(1);
  const [desplayMoreMatchesButton, setDesplayMoreMatchesButton] =
    useState(true);

  const currentDate = new Date().toISOString().slice(0, 10);

  const [isLoading, data, isError, error] = useFetchMatchesByDate(currentDate);

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
