const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');

const graphql = require('graphql');
const { GraphQLObjectType } = graphql;

module.exports = { typeDefs, resolvers, graphql };