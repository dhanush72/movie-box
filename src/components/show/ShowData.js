import React from 'react';
import styled from 'styled-components';
import IMG_PLACEHOLDER from '../../assets/images/not-found.png';

const Star = styled.div`
  display: inline-block;
  width: 18px;
  height: 18px;
  background-color: #ffc806;
  clip-path: polygon(
    50% 0%,
    61% 35%,
    98% 35%,
    68% 57%,
    79% 91%,
    50% 70%,
    21% 91%,
    32% 57%,
    2% 35%,
    39% 35%
  );
`;

// eslint-disable-next-line arrow-body-style
const ShowData = ({ name, rating, summary, tags, image }) => {
  return (
    <div>
      <img src={image ? image.original : IMG_PLACEHOLDER} alt="show-cover" />
      <div>
        <div>
          <h1>{name}</h1>
          <div>
            <Star />
            <span>{rating.average || 'N/A'}</span>
          </div>
        </div>
        <div dangerouslySetInnerHTML={{ __html: summary }} />

        <div>
          Tags:{' '}
          <div>
            {tags.map((tag, i) => (
              <span key={i}>{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowData;
