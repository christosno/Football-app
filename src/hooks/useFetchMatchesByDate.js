import { useQuery } from "react-query";
import axios from "axios";

const useFetchMatchesByDate = (matchesDate, leagueId, currentYear) => {
  const fetchParams = { date: matchesDate };

  if (leagueId) {
    fetchParams.league = leagueId;
    fetchParams.season = currentYear;
  }

  console.log("Fetching Data ---> fetchParams", fetchParams);

  const options = {
    method: "GET",
    url: "https://api-football-v1.p.rapidapi.com/v3/fixtures11",
    params: fetchParams,
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_X_RAPIDAPI_KEY,
      "X-RapidAPI-Host": process.env.REACT_APP_X_RAPIDAPI_HOST,
    },
  };

  const { isLoading, data, isError, error } = useQuery(
    ["matches-by-date", leagueId],
    () => {
      return axios.request(options);
    },
    {
      select: (data) => {
        return data.data.response;
      },
    }
  );

  return [isLoading, data, isError, error];
};

export default useFetchMatchesByDate;
