import { useQuery } from "react-query";
import axios from "axios";

const useFetchMatchesByDate = (matchesDate, leagueId, currentYear) => {
  // date: currentDate, league: leagueId, season: currentYear
  const fetchParams = { date: matchesDate };

  console.log("Fetching Data ---> leagueId", leagueId);

  if (leagueId) {
    fetchParams.league = leagueId;
    fetchParams.season = currentYear;
  }

  console.log("Fetching Data ---> fetchParams", fetchParams);

  const options = {
    method: "GET",
    url: "https://api-football-v1.p.rapidapi.com/v3/fixtures111",
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
