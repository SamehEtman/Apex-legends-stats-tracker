import React, { useState } from 'react';
import SearchBar from './SearchBar';
import LegendItem from './LegendItem';
const App = () => {
  const [searchId, setSearchId] = useState('');

  return (
    <div>
      <SearchBar searchId={searchId} setSearchId={setSearchId} />
      <LegendItem />
    </div>
  );
};

export default App;
