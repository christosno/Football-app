import { useQuery } from "react-query";
import axios from "axios";

const useFetchCountryLeagues = (countryName = "England") => {
  const options = {
    method: "GET",
    url: "https://api-football-v1.p.rapidapi.com/v3/leagues",
    params: { country: countryName },
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_X_RAPIDAPI_KEY,
      "X-RapidAPI-Host": process.env.REACT_APP_X_RAPIDAPI_HOST,
    },
  };

  const {
    data: leagueData,
    isLoading: leagueIsLoading,
    isError: leagueIsError,
    error: leagueError,
  } = useQuery(["league-matches", countryName], () => axios.request(options), {
    select: (data) => {
      return data.data.response;
    },
    staleTime: Infinity,
  });

  console.log("Dataaaaaaaaa ----- >>>>>>> ", leagueData);

  return [leagueData, leagueIsLoading, leagueIsError, leagueError];
};

export default useFetchCountryLeagues;
