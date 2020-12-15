import React from 'react';
import ShowCard from './ShowCard';
import NotFound from '../../assets/images/not-found.png';
import { FlexGrid } from '../styles';

// eslint-disable-next-line arrow-body-style
const ShowGrid = ({ data }) => {
  return (
    <FlexGrid>
      {data.map(({ show }) => (
        <ShowCard
          key={show.id}
          id={show.id}
          name={show.name}
          image={show.image ? show.image.medium : NotFound}
          summary={show.summary}
        />
      ))}
    </FlexGrid>
  );
};

export default ShowGrid;
