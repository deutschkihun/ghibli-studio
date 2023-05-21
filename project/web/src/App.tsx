import * as React from 'react';
import { ChakraProvider, Box, Text, theme } from '@chakra-ui/react';
import { ApolloProvider } from '@apollo/client';
import FilmList from './components/film/FilmList';
import { createApolloClient } from './apollo/createApolloClient';

const apolloClient = createApolloClient();

export const App = (): JSX.Element => {
  return (
    <ApolloProvider client={apolloClient}>
      <ChakraProvider theme={theme}>
        <Box textAlign="center" fontSize="xl">
          <Text>Ghibli GraphQL123123</Text>
          <FilmList />
        </Box>
      </ChakraProvider>
    </ApolloProvider>
  );
};
