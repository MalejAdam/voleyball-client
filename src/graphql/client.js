import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';

const httpUrl = 'https://voleyball-server-adam-malej.herokuapp.com/graphql';
const httpLink = ApolloLink.from([new HttpLink({ uri: httpUrl })]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: httpLink,
  defaultOptions: { query: { fetchPolicy: 'no-cache' } },
});

export default client;
