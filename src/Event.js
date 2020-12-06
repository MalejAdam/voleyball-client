import React from 'react';
import { useForm } from 'react-hook-form';
import './Event.scss';

export const Event = ({ event }) => {
  const { register, handleSubmit, reset } = useForm();

  return (
    <div
      className="col-12 col-md-5 event"
      style={{
        marginBottom: '20px',
        backgroundColor: 'white',
      }}
    >
      <div className="row">
        <div className="col-6">
          <label>Data wydarzenia: {event.date}</label>
        </div>
        <div className="col-6 cost">
          <label>Koszt: {event.costPerPerson}</label>
        </div>
        <div className="col-6">
          <label>Gdzie gramy?: {event.address}</label>
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
