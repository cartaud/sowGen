import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Nav from './components/Nav';
import Login from './pages/Login';
import Home from './pages/Home';
import Generate from './pages/Generate';
import Hull from './pages/Hull';
import Sponson from './pages/Sponson'

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
  body: {
    marginTop: '50px',
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center'
  }
}

  return (
    <ApolloProvider client={client}>
      <Router>
        <Nav />
        <div style={styles.body}>
        <Routes >
          <Route
            path='/'
            element={<Login />}
          />
          <Route
            path='/home'
            element={<Home />}
          />
          <Route
            path='/generate'
            element={<Generate />}
          />
          <Route
            path='/generate/hull/:id'
            element={<Hull />}
          />
          <Route
            path='/generate/sponson/:id'
            element={<Sponson />}
          />
        </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
