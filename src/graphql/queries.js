import gql from 'graphql-tag';

export const getEventsQueries = gql`
  query GetEventsQueries {
    events {
      id
      address
      date
      time
    }
  }
`;
