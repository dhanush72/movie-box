import React from 'react';
import { Link } from 'react-router-dom';
import { StyledShowCard } from './ShowCard.style';
import { Star } from './styles/ShowData.style';

// eslint-disable-next-line arrow-body-style
const ShowCard = ({ id, name, image, summary, onStarClick, isStarred }) => {
  const summaryAsText = summary
    ? `${summary.split(' ').slice(0, 10).join(' ').replace(/<.+?>/g, '')}...`
    : 'No description';
  return (
    <StyledShowCard key={id}>
      <div className="img-wrapper">
        <img src={image} alt={name} />
      </div>

      <h1> {name} </h1>
      <p> {summaryAsText} </p>

      <div className="btns">
        <Link to={`/show/${id}`}>Read more</Link>
        <button type="button" onClick={onStarClick}>
          <Star active={isStarred} />
        </button>
      </div>
    </StyledShowCard>
  );
};

export default ShowCard;
