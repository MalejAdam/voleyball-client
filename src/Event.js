import React from 'react';
import { useForm } from 'react-hook-form';
import { months } from './constants/date';
import './Event.scss';

export const Event = ({ event }) => {
  return (
    <div
      className="col-12 col-md-5 event"
      style={{
        marginBottom: '20px',
        backgroundColor: 'white',
      }}
    >
      <div className="row">
        <div className="col-9">
          <label>
            Data wydarzenia: <b>{convertDate(event.date)}</b>
          </label>
        </div>
        <div className="col-3 cost">
          <label>Koszt: {event.costPerPerson}</label>
        </div>
        <div className="col-6">
          <label>Gdzie gramy?:</label>
        </div>
        <div className="col-12">{event.address}</div>
        <div>
          <ol>
            {event.willingPersons
              ? event.willingPersons.map((willingPerson) => {
                  return <li>{willingPerson}</li>;
                })
              : null}
          </ol>
        </div>
      </div>
      <form>
        <div className="row submit-row">
          <div className="col-5">
            <input type="button" value="Zapisz się" onClick={onsubmit}></input>
          </div>
        </div>
      </form>
    </div>
  );
};

const onsubmit = () => {
  alert('Cześć! Przycisk jest w trakcie prac ;)');
  return false;
};

const convertDate = (date) => {
  const splitedDate = date.split('-').reverse();
  const mappedDate = splitedDate.map((date, index) => {
    if (index === 1) {
      return months[parseInt(date) - 1].toLowerCase();
    }
    return date;
  });
  return mappedDate.join(' ');
};
