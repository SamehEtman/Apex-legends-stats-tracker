import React, { useState } from 'react';
import SearchBar from './SearchBar';

const App = () => {
  const [searchId, setSearchId] = useState('');
  console.log(searchId)
  return (
    <div>
      <SearchBar searchId={searchId} setSearchId={setSearchId} />
    </div>
  );
};

export default App;
