import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Login from './pages/Login';
import Home from './pages/Home'

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
const styles = {
  portfolio: {
    height: '1000px'
  }
}

  return (
    <ApolloProvider client={client}>
      <Router>
          <Routes>
            <Route
              path='/'
              element={<Login />}
            />
            <Route
              path='/home'
              element={<Home />}
            />
          </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;
