import React, { useState } from 'react';
import Render from '../components/Render';

// eslint-disable-next-line arrow-body-style
const Home = () => {
  const [input, setInput] = useState('');

  const onInputChange = e => {
    setInput(e.target.value);
  };

  const onSearch = () => {
    fetch(`http://api.tvmaze.com/search/shows?q=${input}`)
      .then(data => data.json())
      .then(result => {
        console.log(result);
      });
    setInput('');
  };

  const onKeyDown = e => {
    if (e.keyCode === 13) {
      onSearch();
      setInput('');
    }
  };

  return (
    <Render>
      <input
        type="text"
        onChange={onInputChange}
        onKeyDown={onKeyDown}
        value={input}
      />
      <button type="button" onClick={onSearch}>
        Search
      </button>
    </Render>
  );
};

export default Home;
