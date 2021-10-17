import React, { useEffect, useState } from 'react';
import axio from 'axios';
import SearchBar from './SearchBar';
import LegendsList from './LegendsList';
const App = () => {
  const [searchId, setSearchId] = useState('');
  const [legendsList, setLegendsList] = useState([]);
  useEffect(() => {
    if (!searchId) return;
    const fetchStats = async (id) => {
      const { data } = await axio.get(`/api/${id}`);
      setLegendsList(data.data);
    };
    fetchStats(searchId);
  }, [searchId]);
  return (
    <div>
      <SearchBar searchId={searchId} setSearchId={setSearchId} />
      <LegendsList legendsList={legendsList} />
    </div>
  );
};

export default App;
