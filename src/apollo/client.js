import { InMemoryCache } from "apollo-cache-inmemory";
import {PrismicLink} from "apollo-link-prismic"
import { ApolloClient } from '@apollo/client';

export const client = new ApolloClient({
  link: PrismicLink({
    uri: "https://smesco.prismic.io/graphql",
    accessToken: "MC5ZREZXeUJJQUFDRUFnSUZi.77-9HzM-Qy3vv70QI0bvv73vv73vv70ILE3vv70ERAxmRyhT77-977-9HH4-77-9DT8"
  }),
  cache: new InMemoryCache()
});