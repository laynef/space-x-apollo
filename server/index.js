const { ApolloServer } = require('apollo-server');
// Resolvers
const resolvers = require('./resolvers');
const typeDefs = require('./typeDefs');
const SpaceXAPI = require('./sources/SpaceXAPI');

const server = new ApolloServer({ 
    typeDefs, 
    resolvers,
    dataSources: () => ({
        spaceX: new SpaceXAPI(),
    }),
    context: () => ({}),
    tracing: true
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});