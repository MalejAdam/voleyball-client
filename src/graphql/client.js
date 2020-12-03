import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';

const httpUrl = 'http://localhost:9000/graphql';
const httpLink = ApolloLink.from([new HttpLink({ uri: httpUrl })]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: httpLink,
  defaultOptions: { query: { fetchPolicy: 'no-cache' } },
});

export default client;
