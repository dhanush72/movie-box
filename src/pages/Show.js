/* eslint-disable no-underscore-dangle */
import React from 'react';
import { useParams } from 'react-router-dom';
import ShowData from '../components/show/ShowData';
import Details from '../components/show/Details';
import Cast from '../components/show/Cast';
import Seasons from '../components/show/Seasons';
import { ShowPageWrapper, InfoBlock } from './style';
import { useShow } from '../misc/customHooks';

// eslint-disable-next-line arrow-body-style
const Show = () => {
  const { id } = useParams();
  //   const [show, setShow] = useState(null);
  //   const [isLoading, setIsLoading] = useState(true);
  //   const [error, setError] = useState(null);

  const { show, isLoading, error } = useShow(id);

  if (isLoading) {
    return <div>Loading....</div>;
  }

  if (error) {
    return <div>Error occured: {error} </div>;
  }

  return (
    <ShowPageWrapper>
      <ShowData
        image={show.image}
        name={show.name}
        rating={show.rating}
        summary={show.summary}
        tags={show.genres}
      />
      <InfoBlock>
        <h2>Details</h2>
        <Details
          status={show.status}
          network={show.network}
          premiered={show.premiered}
        />
      </InfoBlock>

      <InfoBlock>
        <h2>Seasons</h2>
        <Seasons seasons={show._embedded.seasons} />
      </InfoBlock>

      <InfoBlock>
        <h2>Cast</h2>
        <Cast cast={show._embedded.cast} />
      </InfoBlock>
    </ShowPageWrapper>
  );
};

export default Show;
