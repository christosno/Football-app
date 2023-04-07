import { useQuery } from "react-query";
import axios from "axios";

const useFetchCountries = () => {
  const options = {
    method: "GET",
    url: "https://api-football-v1.p.rapidapi.com/v3/countries",
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_X_RAPIDAPI_KEY,
      "X-RapidAPI-Host": process.env.REACT_APP_X_RAPIDAPI_HOST,
    },
  };

  const {
    isLoading: countryIsLoading,
    data: countryData,
    isError: countryIsError,
    error: countryError,
  } = useQuery(
    "countries",
    () => {
      return axios.request(options);
    },
    {
      select: (data) => {
        return data.data.response;
      },
      staleTime: Infinity,
    }
  );

  return [countryIsLoading, countryData, countryIsError, countryError];
};

export default useFetchCountries;
