import React from 'react';
import { TitleWrapper } from './styles';

const Title = ({ title, subtitle }) => (
  <TitleWrapper>
    <h1> {title} </h1>
    <p>{subtitle}</p>
  </TitleWrapper>
);

export default Title;
