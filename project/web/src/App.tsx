import * as React from 'react';
import { ChakraProvider, Box, theme } from '@chakra-ui/react';
import { ApolloProvider } from '@apollo/client';
import { BrowserRouter, Route } from 'react-router-dom';
import { createApolloClient } from './apollo/createApolloClient';
import Main from './page/Main';
import Film from './page/Film';

const apolloClient = createApolloClient();

export const App = (): JSX.Element => {
  return (
    <ApolloProvider client={apolloClient}>
      <ChakraProvider theme={theme}>
        <Box textAlign="center" fontSize="xl">
          <BrowserRouter>
            <Route exact path="/" component={Main} />
            <Route exact path="/film/:filmId" component={Film} />
          </BrowserRouter>
        </Box>
      </ChakraProvider>
    </ApolloProvider>
  );
};
