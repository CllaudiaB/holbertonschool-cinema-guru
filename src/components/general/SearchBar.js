import React from 'react';
import './general.css';

function SearchBar({ title, setTitle }){
  function handleInput(event){
    setTitle(event.target.value);
  };

  return (
    <input
      className="search-bar"
      type="text"
      value={title}
      onChange={handleInput}
      placeholder="Search Movies"
    />
  );
};

export default SearchBar;
