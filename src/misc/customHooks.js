import { useReducer, useEffect, useState } from 'react';
import { apiGet } from './config';

function showsReducer(prevState, action) {
  switch (action.type) {
    case 'ADD': {
      return [...prevState, action.showId];
    }
    case 'REMOVE': {
      return prevState.filter(showId => showId !== action.showId);
    }
    default:
      return prevState;
  }
}

// save starred cards
function usePersistedReducer(reducer, initiatState, key) {
  // lazy evaluation
  const [state, dispatch] = useReducer(reducer, initiatState, initial => {
    const persisted = localStorage.getItem(key);

    return persisted ? JSON.parse(persisted) : initial;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);

  return [state, dispatch];
}

export function useShows(key = 'shows') {
  return usePersistedReducer(showsReducer, [], key);
}

// save user entered input in sessionstorage
export function useLastQuery(key = 'lastQuery') {
  const [input, setInput] = useState(() => {
    const persisted = sessionStorage.getItem(key);

    return persisted ? JSON.parse(persisted) : '';
  });
  const setPersistedInput = newState => {
    setInput(newState);
    sessionStorage.setItem(key, JSON.stringify(newState));
  };
  return [input, setPersistedInput];
}

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

export function useShow(showId) {
  const [state, dispatch] = useReducer(reducer, {
    show: null,
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    let isMounted = true;
    apiGet(`/shows/${showId}?embed[]=seasons&embed[]=cast`)
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
  }, [showId]);
  return state;
}
