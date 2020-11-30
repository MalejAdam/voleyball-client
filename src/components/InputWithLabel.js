import React from 'react';
import { Input } from './Input';
import './InputWithLabel.scss';

export const InputWithLabel = ({ inputName, textLabel, placeholder }) => {
  return (
    <>
      <div className="col-12">
        <div className="row">
          <div className="col-2 input-col">
            <label>{textLabel}: </label>
          </div>
          <div className="col">
            <Input name={inputName} placeholder={placeholder} />
          </div>
        </div>
      </div>
    </>
  );
};
