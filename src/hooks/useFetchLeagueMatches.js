import { useQuery } from "react-query";
import axios from "axios";
const useFetchLeagueMatches = () => {
  const options = {
    method: "GET",
    url: "https://api-football-v1.p.rapidapi.com/v3/fixtures",
    params: { league: "39", season: "2020" },
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_X_RAPIDAPI_KEY,
      "X-RapidAPI-Host": process.env.REACT_APP_X_RAPIDAPI_HOST,
    },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
};

export default useFetchLeagueMatches;
