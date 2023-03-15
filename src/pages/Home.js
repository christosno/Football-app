import React, { useState, useEffect } from "react";

const Home = () => {
  const [data, setData] = useState([]);

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_X_RAPIDAPI_KEY,
      "X-RapidAPI-Host": process.env.REACT_APP_X_RAPIDAPI_HOST,
    },
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const fetchedData = await fetch(
        "https://api-football-v1.p.rapidapi.com/v3/timezone",
        options
      );

      const finalData = await fetchedData.json();

      console.log(finalData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <p>Home</p>
    </>
  );
};

export default Home;
