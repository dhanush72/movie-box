import React from 'react';

// eslint-disable-next-line arrow-body-style
const ActorCard = ({ id, name, country, birthday, gender, image }) => {
  return (
    <div key={id}>
      <div>
        <img src={image} alt={name} />
      </div>

      <h1>
        {name} {gender ? `${gender}` : null}
      </h1>
      <p> {country ? `from ${country}` : null} </p>
      <p> {birthday ? <p> {birthday} </p> : null} </p>
    </div>
  );
};

export default ActorCard;
