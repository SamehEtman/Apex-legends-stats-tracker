import React, { useState } from 'react';

const SearchBar = ({ searchId, setSearchId }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const onFormSubmit = (e) => {
    e.preventDefault();
    setSearchId(searchTerm);
  };
  return (
    <div>
      <form
        className="ui form container"
        style={{ marginTop: '20px' }}
        onSubmit={(e) => onFormSubmit(e)}
      >
        <div className="field">
          <label>Enter your Origin ID</label>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Origin ID"
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
