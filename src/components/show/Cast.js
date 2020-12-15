import React from 'react';
import IMG_PLACEHOLDER from '../../assets/images/not-found.png';
import { CastList } from './styles/Cast.style';

// eslint-disable-next-line arrow-body-style
const Cast = ({ cast }) => {
  return (
    <CastList>
      {cast.map(({ person, character, voice }, key) => (
        <div key={key} className="cast-item">
          <div className="pic-wrapper">
            <img
              src={person.image ? person.image.medium : IMG_PLACEHOLDER}
              alt="cast-person"
            />
          </div>
          <div className="actor">
            <span>
              <p className="bold">{person.name}</p> | {character.name}{' '}
              {voice ? '| Voice' : ''}
            </span>
          </div>
        </div>
      ))}
    </CastList>
  );
};

export default Cast;
