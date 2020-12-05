import React from 'react';
import './InputDate.scss';

export const InputDate = React.forwardRef(({ inputName }, ref) => {
  return (
    <>
      <div className="col-4 label-col">
        <label>Data: </label>
      </div>
      <div className="col-8">
        <input name={inputName} ref={ref} type="date" />
      </div>
    </>
  );
});
