import React from 'react';
import { Input } from './components/Input';
import { InputWithLabel } from './components/InputWithLabel';

export const Registration = () => {
  return (
    <>
      <h3>Zapisy</h3>
      <InputWithLabel inputName="name" textLabel="Imię" />
      <InputWithLabel inputName="surname" textLabel="Nazwisko" />
      <InputWithLabel inputName="email" textLabel="Email" />
    </>
  );
};
