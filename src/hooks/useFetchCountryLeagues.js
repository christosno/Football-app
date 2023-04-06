import { useQuery } from "react-query";
import axios from "axios";

const useFetchCountryLeagues = (countryName = "Albania") => {
  const options = {
    method: "GET",
    url: "https://api-football-v1.p.rapidapi.com/v3/leagues",
    params: { code: countryName },
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_X_RAPIDAPI_KEY,
      "X-RapidAPI-Host": process.env.REACT_APP_X_RAPIDAPI_HOST,
    },
  };

  const {
    isLoading: leagueIsLoading,
    data: leagueData,
    isError: leagueIsError,
    error: leagueError,
  } = useQuery("country-leagues", () => axios.request(options), {
    enabled: false,
    staleTime: Infinity,
  });

  return [leagueIsLoading, leagueData, leagueIsError, leagueError];
};

export default useFetchCountryLeagues;
