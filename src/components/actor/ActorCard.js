import React from 'react';
import { StyledActorCard } from './ActorCard.style';

// eslint-disable-next-line arrow-body-style
const ActorCard = ({ id, name, country, birthday, gender, image }) => {
  return (
    <StyledActorCard key={id}>
      <div className="img-wrapper">
        <img src={image} alt={name} />
      </div>

      <h1>
        {name} {gender ? `${gender}` : null}
      </h1>
      <p> {country ? `from ${country}` : null} </p>
      <p className="deathday"> {birthday ? <p> {birthday} </p> : null} </p>
    </StyledActorCard>
  );
};

export default ActorCard;
