import React, { useState } from 'react';
import SearchBar from './SearchBar';
import LegendsList from './LegendsList';
const App = () => {
  const [searchId, setSearchId] = useState('');

  return (
    <div>
      <SearchBar searchId={searchId} setSearchId={setSearchId} />
      <LegendsList />
    </div>
  );
};

export default App;
