import React, { useState, useEffect } from 'react';
import Render from '../components/Render';
import { useShows } from '../misc/customHooks';
import { apiGet } from '../misc/config';
import ShowGrid from '../components/show/ShowGrid';
import { StarredDiv } from './style';

// eslint-disable-next-line arrow-body-style
const Starred = () => {
  const [starred] = useShows();
  const [shows, setShows] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (starred && starred.length > 0) {
      const promises = starred.map(showId => apiGet(`/shows/${showId}`));

      Promise.all(promises)
        .then(apiData => apiData.map(show => ({ show })))
        .then(results => {
          setShows(results);
          setIsLoading(false);
        })
        .catch(err => {
          setError(err.messages);
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
    }
  }, [starred]);

  return (
    <Render>
      {isLoading && <div>shows are still loading</div>}{' '}
      {error && <div>error occured</div>}{' '}
      {!isLoading && !shows && <StarredDiv>No shows were added</StarredDiv>}
      {!isLoading && !error && shows && <ShowGrid data={shows} />}
    </Render>
  );
};

export default Starred;
