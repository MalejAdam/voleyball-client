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

export const registrationForEvent = gql`
  mutation RegistrationForEvent($input: RegisterForEventInput) {
    registerForEvent(input: $input) {
      id
      willingPersons
    }
  }
`;
