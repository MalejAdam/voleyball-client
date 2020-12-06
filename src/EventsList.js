import React from 'react';
import { Event } from './Event';
import { useQuery } from '@apollo/client';
import { getEventsQueries } from './graphql/queries';
import './EventsList.scss';

export const EventsList = () => {
  const { loading, error, data } = useQuery(getEventsQueries);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  const events = data.events;
  const sortedEvents = sortByDate(events);

  return (
    <>
      <div className="col">
        <div className="row justify-content-between">
          {sortedEvents.map((event) => {
            return (
              <Event key={event.id} classname="event-list" event={event} />
            );
          })}
        </div>
      </div>
    </>
  );
};

const sortByDate = (events) => {
  return events.slice().sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateA - dateB;
  });
};
