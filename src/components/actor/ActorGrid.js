import React from 'react';
import ActorCard from './ActorCard';
import NotFound from '../../assets/images/not-found.png';
import { FlexGrid } from '../styles';

// eslint-disable-next-line arrow-body-style
const ActorGrid = ({ data }) => {
  return (
    <FlexGrid>
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
    </FlexGrid>
  );
};

export default ActorGrid;
