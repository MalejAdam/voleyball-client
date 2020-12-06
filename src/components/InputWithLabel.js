import React from 'react';
import { Input } from './Input';
import './InputWithLabel.scss';

export const InputWithLabel = React.forwardRef(
  ({ inputName, textLabel, placeholder, isRequired }, ref) => {
    return (
      <>
        <div className="col-3 col-md-2 label-col">
          <label>{textLabel}: </label>
        </div>
        <div className="col">
          <Input
            name={inputName}
            placeholder={placeholder}
            ref={ref}
            isRequired={isRequired}
          />
        </div>
      </>
    );
  }
);
