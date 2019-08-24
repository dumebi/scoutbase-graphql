const { GraphQLServer } = require('graphql-yoga')
const { prisma } = require('../database/generated/prisma-client')
const graphQLEndpoint = '/graphql';

const Query = require('./resolvers/Query')
const Mutation = require('./resolvers/Mutation')
const Actor = require('./resolvers/Actor')
const Movie = require('./resolvers/Movie')
const Director = require('./resolvers/Director')

const resolvers = {
  Query,
  Mutation,
  Actor,
  Movie,
  Director
}

const directiveResolvers = require('./resolvers/Directives')
// 3
const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: request => {
    return {
      ...request,
      prisma,
    }
  },
})

server.use((req, res, next) => {
  if (req.path.startsWith(graphQLEndpoint)) return next();
 return res.status(404).json({message: 'This route does not exist'})
});

server.start({
  endpoint: '/graphql',
  playground: '/graphql',
}, () => console.log(`Server is running on http://localhost:4000`))