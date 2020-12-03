import React from 'react';
import { useForm } from 'react-hook-form';
import './Event.scss';

export const Event = ({ event }) => {
  const { register, handleSubmit, reset } = useForm();

  return (
    <div
      className="col-10 event"
      style={{ marginBottom: '20px', backgroundColor: 'white' }}
    >
      <div className="row">
        <div className="col-6">Data wydarzenia: {event.date}</div>
        <div className="col-6 cost">Koszt: {event.costPerPerson}</div>
        <div className="col-6">Gdzie gramy?: {event.address}</div>
      </div>
      <form>
        <div className="row submit-row">
          <div className="col-3">
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
