import React from 'react';
import ShowCard from './ShowCard';
import NotFound from '../../assets/images/not-found.png';
import { FlexGrid } from '../styles';
import { useShows } from '../../misc/customHooks';

// eslint-disable-next-line arrow-body-style
const ShowGrid = ({ data }) => {
  const [starredShows, dispatchStarred] = useShows();
  return (
    <FlexGrid>
      {data.map(({ show }) => {
        const isStarred = starredShows.includes(show.id);
        const onStarClick = () => {
          if (isStarred) {
            dispatchStarred({
              type: 'REMOVE',
              showId: show.id,
            });
          } else {
            dispatchStarred({
              type: 'ADD',
              showId: show.id,
            });
          }
        };
        return (
          <ShowCard
            key={show.id}
            id={show.id}
            name={show.name}
            image={show.image ? show.image.medium : NotFound}
            summary={show.summary}
            onStarClick={onStarClick}
            isStarred={isStarred}
          />
        );
      })}
    </FlexGrid>
  );
};

export default ShowGrid;
