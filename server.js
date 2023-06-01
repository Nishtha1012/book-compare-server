const { ApolloServer } = require('apollo-server')
const { typeDefs } = require('./src/gql/schema')
const { resolvers } = require('./src/gql/resolver')

const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen().then(({ url }) => {
    console.log(`server is on at ${url}`);
})
