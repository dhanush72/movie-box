import { useReducer, useEffect } from 'react';

function usePersistedReducer(reducer, initiatState, key) {
  const [state, dispatch] = useReducer(reducer, initiatState, initial => {
    const persisted = localStorage.getItem(key);

    return persisted ? JSON.parse(persisted) : initial;
  });

  useEffect(() => {
    localStorage.getItem(key, JSON.stringify(state));
  }, [state, key]);

  return [state, dispatch];
}

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

export function useShows(key = 'shows') {
  return usePersistedReducer(showsReducer, [], key);
}
