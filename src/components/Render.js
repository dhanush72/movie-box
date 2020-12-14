import React from 'react';
import Nav from './Nav';
import Title from './Title';

// eslint-disable-next-line arrow-body-style
const Render = ({ children }) => {
  return (
    <>
      <Title
        title="Movie Box"
        subtitle="Are you looking for a movie or actor ?"
      />
      <Nav />
      {children}
    </>
  );
};

export default Render;
