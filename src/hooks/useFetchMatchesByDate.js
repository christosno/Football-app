import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

const useFetchMatchesByDate = (matchesDate) => {
  const options = {
    method: "GET",
    url: "https://api-football-v1.p.rapidapi.com/v3/fixtures",
    params: { date: matchesDate },
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_X_RAPIDAPI_KEY,
      "X-RapidAPI-Host": process.env.REACT_APP_X_RAPIDAPI_HOST,
    },
  };

  const { isLoading, data, isError, error } = useQuery(
    "matches-by-date",
    () => {
      return axios.request(options);
    },
    {
      select: (data) => {
        return data.data.response;
      },
      staleTime: 1800000,
    }
  );

  return [isLoading, data, isError, error];
};

export default useFetchMatchesByDate;
