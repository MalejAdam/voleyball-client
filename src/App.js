import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { Header } from './Header';
import { MainCard } from './MainCard';
import client from './graphql/client';
import './App.scss';

export const App = () => {
  return (
    <ApolloProvider client={client}>
      <div className="app-container">
        <Header />
        <MainCard />
      </div>
    </ApolloProvider>
  );
};
