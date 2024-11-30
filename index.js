import { ApolloServer } from "@apollo/server"; // set up the server, configure it and tell Apollo how to handle all different type of data and respond to queries.
import { startStandaloneServer } from "@apollo/server/standalone";// to start up the server so we can start listing for requests.

// Every GraphQl server uses a schema to define the structure of data that clients can query. 

// A schema is a collection of type definitions(typeDefs) that together define the "shape" of the queries that are executed against your data.

// server setup

// Apollo server takes object as an argument, that argument requires two properties.
// Apollo server constructor requires two parameters: your schema definitions and your set of resolvers.
const server = new ApolloServer({
  typeDefs, // descriptions of our data types and the relationship have between other data types.
  resolvers  // bunch of reslover functions that determine how we respond to queries for different data on the graph. 
});

const { url } = await startStandaloneServer(server, { // we have started the server using startStandaloneServer method.
  listen: { port: 4000 }
});

console.log(`Server ready at: ${url}`);
