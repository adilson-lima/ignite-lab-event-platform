import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4o9li1g1hhj01z2bvby91q0/master",
  cache: new InMemoryCache(),
});
