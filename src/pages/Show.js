/* eslint-disable no-underscore-dangle */
import React, { useEffect, useReducer } from 'react';
import { useParams } from 'react-router-dom';
import { apiGet } from '../misc/config';
import ShowData from '../components/show/ShowData';
import Details from '../components/show/Details';
import Cast from '../components/show/Cast';
import Seasons from '../components/show/Seasons';

const initialState = {
  show: null,
  isLoading: true,
  error: null,
};

const reducer = (prevState, action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS': {
      return { isLoading: false, show: action.show, error: null };
    }
    case 'FETCH_FAILED': {
      return { isLoading: true, error: action.error };
    }

    default:
      return prevState;
  }
};

// eslint-disable-next-line arrow-body-style
const Show = () => {
  const { id } = useParams();
  //   const [show, setShow] = useState(null);
  //   const [isLoading, setIsLoading] = useState(true);
  //   const [error, setError] = useState(null);

  const [{ show, isLoading, error }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(() => {
    let isMounted = true;
    apiGet(`/shows/${id}?embed[]=seasons&embed[]=cast`)
      .then(data => {
        dispatch({ type: 'FETCH_SUCCESS', show: data });
      })
      .catch(err => {
        dispatch({ type: 'FETCH_FAILED', error: err.messages });
      });
    return () => {
      // eslint-disable-next-line no-unused-vars
      isMounted = false;
    };
  }, [id]);

  if (isLoading) {
    return <div>Loading....</div>;
  }

  if (error) {
    return <div>Error occured: {error} </div>;
  }

  return (
    <>
      <ShowData
        image={show.image}
        name={show.name}
        rating={show.rating}
        summary={show.summary}
        tags={show.genres}
      />
      <div>
        <h2>Details</h2>
        <Details
          status={show.status}
          network={show.network}
          premiered={show.premiered}
        />
      </div>

      <div>
        <h2>Seasons</h2>
        <Seasons seasons={show._embedded.seasons} />
      </div>

      <div>
        <h2>Cast</h2>
        <Cast cast={show._embedded.cast} />
      </div>
    </>
  );
};

export default Show;
