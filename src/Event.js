import React from 'react';
import { useQuery } from '@apollo/client';
import { getEventsQueries } from './graphql/queries';

export const Event = () => {
  const { loading, error, data } = useQuery(getEventsQueries);
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  const events = data.events;
  eventsMap(events);

  return (
    <div>
      {events.map((event) => {
        return <div key={event.id}>{event.address}</div>;
      })}
    </div>
  );
};

const eventsMap = (events) => {
  console.log(events);
};
