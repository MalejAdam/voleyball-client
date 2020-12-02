import gql from 'graphql-tag';

export const addEventMutation = gql`
  mutation AddEventMutation($input: EventInput) {
    addEvent(input: $input) {
      id
      address
      time
    }
  }
`;
