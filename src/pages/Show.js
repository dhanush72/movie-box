import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { apiGet } from '../misc/config';

// eslint-disable-next-line arrow-body-style
const Show = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    apiGet(`/shows/${id}?embed[]=seasons&embed[]=cast`)
      .then(data => {
        setShow(data);
        setIsLoading(false);
      })
      .catch(err => {
        setError(err.message);
      });
    return () => {
      // eslint-disable-next-line no-unused-vars
      isMounted = false;
    };
  }, [id]);

  console.log('show', show);

  if (isLoading) {
    return <div>Loading....</div>;
  }

  if (error) {
    return <div>Error occured: {error} </div>;
  }

  return <div>Show</div>;
};

export default Show;
