import React, { useEffect, useReducer } from 'react';
import { useParams } from 'react-router-dom';
import { apiGet } from '../misc/config';

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

  const [state, dispatch] = useReducer(reducer, initialState);

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

  console.log(state);

  //   if (dispatch({ type: '' })) {
  //     return <div>Loading....</div>;
  //   }

  //   if (error) {
  //     return <div>Error occured: {error} </div>;
  //   }

  return <div>Show</div>;
};

export default Show;
