import React from 'react';
import { Input } from './components/Input';
import { InputWithLabel } from './components/InputWithLabel';

export const Registration = () => {
  return (
    <>
      <h3>Zapisy</h3>
      <div className="col-12">
        <InputWithLabel
          inputName="name"
          textLabel="Imię lub ksywka"
          placeholder="Jan, Kondzio..."
        />
      </div>
      <div className="col-12">
        <InputWithLabel inputName="email" textLabel="Email" />
      </div>
    </>
  );
};
