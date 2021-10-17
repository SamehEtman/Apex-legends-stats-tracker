import React from 'react';

const SearchBar = () => {
  return (
    <div>
      <form className="ui form container" style={{ marginTop: '20px' }}>
        <div className="field">
          <label>Enter your Origin ID</label>
          <input type="text" placeholder="Origin ID" />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
