import React, { useState, useEffect } from 'react';
import { apidata } from '../dummy-data';

const Home = () => {
  const [data, setData] = useState([]);

  // const options = {
  //   method: 'GET',
  //   headers: {
  //     'X-RapidAPI-Key': process.env.REACT_APP_X_RAPIDAPI_KEY,
  //     'X-RapidAPI-Host': process.env.REACT_APP_X_RAPIDAPI_HOST,
  //   },
  // };

  const finalData = apidata;

  useEffect(() => {
    console.log(finalData);
    // fetchData();
  }, []);

  // const fetchData = async () => {
  //   try {
  //     const fetchedData = await fetch(
  //       "https://api-football-v1.p.rapidapi.com/v3/fixtures?date=2023-03-15",
  //       options
  //     );

  //     const finalData = await fetchedData.json();

  //     console.log(finalData);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <>
      <p>Home</p>
    </>
  );
};

export default Home;
