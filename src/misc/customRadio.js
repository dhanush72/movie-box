import React from 'react';
import { RadioWrapper } from '../pages/style';

// eslint-disable-next-line arrow-body-style
const CustomRadio = ({ label, ...restProps }) => {
  return (
    <>
      <RadioWrapper htmlFor={restProps.id}>
        {label}
        <input {...restProps} type="radio" />
        <span />
      </RadioWrapper>
    </>
  );
};

export default CustomRadio;
