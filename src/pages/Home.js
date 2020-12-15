import React, { useState } from 'react';
import Render from '../components/Render';
import { apiGet } from '../misc/config';

// eslint-disable-next-line arrow-body-style
const Home = () => {
  const [input, setInput] = useState('');
  const [results, setResults] = useState(null);
  const [searchOptions, setSearchOptions] = useState('shows');
  const isShowsSearch = searchOptions === 'shows';

  const onInputChange = e => {
    setInput(e.target.value);
  };

  const onSearch = () => {
    apiGet(`/search/${searchOptions}?q=${input}`).then(result => {
      setResults(result);
      setInput('');
    });
  };

  const onKeyDown = e => {
    if (e.keyCode === 13) {
      onSearch();
      setInput('');
    }
  };

  const renderResults = () => {
    if (results && results.length === 0) {
      return <div>No Results</div>;
    }
    if (results && results.length > 0) {
      return results[0].show
        ? results.map(item => <div key={item.show.id}> {item.show.name} </div>)
        : results.map(item => (
            <div key={item.person.id}> {item.person.name} </div>
          ));
    }
    return null;
  };

  const onRadioChange = e => {
    setSearchOptions(e.target.value);
  };

  return (
    <Render>
      <input
        type="text"
        placeholder="Search...."
        onChange={onInputChange}
        onKeyDown={onKeyDown}
        value={input}
      />
      <div>
        <label htmlFor="show-search">
          <input
            type="radio"
            id="show-search"
            value="shows"
            onChange={onRadioChange}
            checked={isShowsSearch}
          />
          Shows
        </label>

        <label htmlFor="actor-search">
          <input
            type="radio"
            id="actor-search"
            value="people"
            onChange={onRadioChange}
            checked={!isShowsSearch}
          />
          Actors
        </label>
      </div>
      <button type="button" onClick={onSearch}>
        Search
      </button>
      {renderResults()}
    </Render>
  );
};

export default Home;
