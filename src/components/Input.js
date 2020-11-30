import React from 'react';
import './Input.scss';

export const Input = ({ name, placeholder }) => {
  return <input name={name} placeholder={placeholder ? placeholder : ''} />; //ref={register} TODO?;
};
