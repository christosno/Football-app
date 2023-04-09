import { useQuery } from "react-query";
import axios from "axios";

const useFetchLeagueSeason = (leagueId) => {
  const options = {
    method: "GET",
    url: "https://api-football-v1.p.rapidapi.com/v3/leagues11",
    params: { id: leagueId },
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_X_RAPIDAPI_KEY,
      "X-RapidAPI-Host": process.env.REACT_APP_X_RAPIDAPI_HOST,
    },
  };

  const { data: leagueSeasonData } = useQuery(
    ["league-season", leagueId],
    () => {
      return axios.request(options);
    },
    {
      select: (data) => {
        return data.data.response[0].seasons.slice(-1)[0]; // last item in the array
      },
      cacheTime: 86400000, // 1 day in milliseconds
      enabled: !!leagueId,
    }
  );

  return [leagueSeasonData];
};

export default useFetchLeagueSeason;
