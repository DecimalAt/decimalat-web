import { ApolloClient, InMemoryCache } from '@apollo/client';

//console.log(process.env.REACT_APP_API_ENDPOINT);

export const client = new ApolloClient({
  uri: "https://api.thegraph.com/subgraphs/name/decimalat/decimal-testnet",//process.env.REACT_APP_API_ENDPOINT,
  cache: new InMemoryCache(),
});