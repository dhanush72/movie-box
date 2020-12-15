import React from 'react';
import { Link } from 'react-router-dom';

// eslint-disable-next-line arrow-body-style
const ShowCard = ({ id, name, image, summary }) => {
  const summaryAsText = summary
    ? `${summary.split(' ').slice(0, 10).join(' ').replace(/<.+?>/g, '')}...`
    : 'No description';
  return (
    <div key={id}>
      <div>
        <img src={image} alt={name} />
      </div>

      <h1> {name} </h1>
      <p> {summaryAsText} </p>

      <div>
        <Link to={`/show/${name}`}>Read more</Link>
        <button type="button">Star me</button>
      </div>
    </div>
  );
};

export default ShowCard;
