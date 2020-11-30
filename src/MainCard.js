import React from 'react';
import { Registration } from './Registration';
import { days, months } from './constants/date';
import './MainCard.scss';

export const MainCard = () => {
  const getDayName = () => {
    const today = new Date();
    const dayId = today.getDay();
    return days[dayId];
  };

  const getFullDate = () => {
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth();
    const year = today.getFullYear();
    return day + ' ' + months[month] + ' ' + year;
  };

  return (
    <div className="container main-card">
      <div className="row">
        <h1>
          Dziś jest: {getDayName().toLowerCase()}, {getFullDate().toLowerCase()}{' '}
        </h1>
      </div>
      <div className="row">
        <Registration />
      </div>
    </div>
  );
};
