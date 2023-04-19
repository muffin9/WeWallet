import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: process.env.API_SERVER_URL,
  cache: new InMemoryCache(),

  defaultOptions: {
    query: {
      notifyOnNetworkStatusChange: true,
    },
    watchQuery: {
      notifyOnNetworkStatusChange: true,
    },
  },
});

export default client;
