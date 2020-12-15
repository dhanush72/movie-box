import React from 'react';
import ActorCard from './ActorCard';
import NotFound from '../../images/not-found.png';

// eslint-disable-next-line arrow-body-style
const ActorGrid = ({ data }) => {
  return (
    <>
      {data.map(({ person }) => (
        <ActorCard
          key={person.id}
          id={person.id}
          name={person.name}
          country={person.country ? person.country.name : null}
          birthday={person.birthday}
          gender={person.gender}
          image={person.image ? person.image.medium : NotFound}
        />
      ))}
    </>
  );
};

export default ActorGrid;
