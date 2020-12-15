import React from 'react';
import ShowCard from './ShowCard';
import NotFound from '../../images/not-found.png';

// eslint-disable-next-line arrow-body-style
const ShowGrid = ({ data }) => {
  return (
    <>
      {data.map(({ show }) => (
        <ShowCard
          key={show.id}
          id={show.id}
          name={show.name}
          image={show.image ? show.image.medium : NotFound}
          summary={show.summary}
        />
      ))}
    </>
  );
};

export default ShowGrid;
