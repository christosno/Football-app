import React, { useState, useEffect } from 'react';
import { apidata } from '../dummy-data';
import { Artboard, Drawer, Button, Pagination, Table } from 'react-daisyui';

const Home = () => {
  // const [data, setData] = useState([]);

  // const options = {
  //   method: 'GET',
  //   headers: {
  //     'X-RapidAPI-Key': process.env.REACT_APP_X_RAPIDAPI_KEY,
  //     'X-RapidAPI-Host': process.env.REACT_APP_X_RAPIDAPI_HOST,
  //   },
  // };
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    setVisible(!visible);
  };
  const finalData = apidata;

  useEffect(() => {
    // fetchData();

    console.log(finalData);
  }, []);

  // const fetchData = async () => {
  //   try {
  //     const fetchedData = await fetch(
  //       'https://api-football-v1.p.rapidapi.com/v3/fixtures?date=2023-03-15',
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
      <div className="flex w-auto p-8 space-x-4 overflow-x-auto flex-nowrap bg-neutral rounded-2xl">
        <Drawer open={visible} onClickOverlay={toggleVisible}>
          <div className="flex items-center justify-center h-56">
            <Button
              color="primary"
              className="lg:hidden"
              onClick={toggleVisible}
            >
              Open drawer
            </Button>
          </div>
        </Drawer>
        <Artboard size={6} horizontal>
          <div className="overflow-x-auto">
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
                  return (
                    <>
                      <Table.Row>
                        <span>{fixture.fixture.date.substring(11, 16)}</span>
                        <span>{fixture.league.name}</span>
                        <span>{fixture.teams.home.name}</span>
                        <span>{fixture.teams.away.name}</span>
                        <span>
                          {fixture.score.fulltime.home} - {}
                          {fixture.score.fulltime.away}
                        </span>
                      </Table.Row>
                      ;
                    </>
                  );
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
        </Artboard>
      </div>
    </>
  );
};

export default Home;
