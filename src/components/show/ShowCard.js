import React from 'react';
import { Link } from 'react-router-dom';
import { StyledShowCard } from './ShowCard.style';

// eslint-disable-next-line arrow-body-style
const ShowCard = ({ id, name, image, summary }) => {
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
        <button type="button">Star me</button>
      </div>
    </StyledShowCard>
  );
};

export default ShowCard;