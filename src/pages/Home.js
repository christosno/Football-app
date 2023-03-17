import React, { useState, useEffect } from 'react';
import Match from '../components/Match';
import { apidata } from '../dummy-data';
import { Button, Table, Pagination } from 'react-daisyui';

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
      <div className="overflow-x-auto flex justify-center">
        <Table zebra="true">
          <Table.Head>
            <span>Time</span>
            <span>League</span>
            <span>Home</span>
            <span>Away</span>
            <span>Score</span>
          </Table.Head>

          <Table.Body>
            {finalData.map((fixture) => {
              return <Match key={fixture.fixture.id} matchData={fixture} />;
            })}
          </Table.Body>
        </Table>
      </div>
      <Pagination>
        <Button>1</Button>
        <Button active>2</Button>
        <Button>3</Button>
        <Button>4</Button>
      </Pagination>
    </>
  );
};

export default Home;
