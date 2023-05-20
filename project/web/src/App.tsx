import * as React from "react";
import {
  ChakraProvider,
  Box,
  Text,
  theme,
} from "@chakra-ui/react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import FilmList from "./components/film/FilmList";

const apolloClient = new ApolloClient({
  uri:'http://localhost:4000/graphql',
  cache: new InMemoryCache()
})

export const App = () => (
  <ApolloProvider client={apolloClient}>
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
      <Text>Ghibli GraphQL123123</Text>
      <FilmList/>
      </Box>
    </ChakraProvider>
  </ApolloProvider>
);
