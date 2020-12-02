import React from 'react';
import './Input.scss';

export const Input = React.forwardRef(
  ({ name, placeholder, isRequired }, ref) => {
    return (
      <input
        ref={ref}
        name={name}
        placeholder={placeholder ? placeholder : ''}
        required={isRequired}
      />
    );
  }
);
