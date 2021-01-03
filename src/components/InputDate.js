import React from 'react';
import './InputDate.scss';

export const InputDate = React.forwardRef(({ inputName }, ref) => {
  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1;
  const year = currentDate.getFullYear();
  const dateInString =
    year +
    '-' +
    (month < 10 ? '0' + month : month) +
    '-' +
    (day < 10 ? '0' + day : day);

  return (
    <>
      <div className="col-4 label-col">
        <label>Data: </label>
      </div>
      <div className="col-8">
        <input name={inputName} ref={ref} type="date" min={dateInString} />
      </div>
    </>
  );
});
