import React from 'react';
import './InputDate.scss';

export const InputDate = React.forwardRef(({ inputName }, ref) => {
  return (
    <>
      <div className="col-2 label-col">
        <label>Data: </label>
      </div>
      <div className="col">
        <input name={inputName} ref={ref} type="date" />
      </div>
    </>
  );
});
