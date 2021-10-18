import React, { useEffect, useState } from 'react';
import axio from 'axios';
import SearchBar from './SearchBar';
import LegendsList from './LegendsList';
import Socials from './Socials';
const App = () => {
  const [searchId, setSearchId] = useState('');
  const [legendsList, setLegendsList] = useState([]);

  useEffect(() => {
    if (!searchId) return;
    const fetchStats = async (id) => {
      const { data } = await axio.get(`/api/${id}`);
      let toSend;
      if (data.data) {
        toSend = data.data;
        toSend.sort((item1, item2) => {
          let kills1 = 0,
            kills2 = 0;
          if (
            item1.hasOwnProperty('stats') &&
            item1.stats.hasOwnProperty('kills')
          ) {
            kills1 = item1.stats.kills.value;
          }
          if (
            item2.hasOwnProperty('stats') &&
            item2.stats.hasOwnProperty('kills')
          ) {
            kills2 = item2.stats.kills.value;
          }
          return kills2 - kills1;
        });
      }

      setLegendsList(data.data ? toSend : data);
    };
    fetchStats(searchId);
  }, [searchId]);
  return (
    <div>
      <SearchBar searchId={searchId} setSearchId={setSearchId} />
      <LegendsList legendsList={legendsList} />
            <Socials />

    </div>
  );
};

export default App;
