const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
require('dotenv').config({path: 'variables.env'})
const Recipe = require('./models/Recipe'); // mongoose schema
const User = require('./models/User'); // mongoose schema

// Bring in GraphQL-Express middleware
const { graphiqlExpress, graphqlExpress } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');
const { typeDefs } = require('./schema');
const { resolvers } = require('./resolvers');

// Create GraphQL schema
const schema = makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers
});

// Connects to database
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log('Database connected'))
    .catch(err => console.error(err));
const app = express();

// Create graphiql application
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }))

// Connect schemas with GraphQL
app.use('/graphql', bodyParser.json(), graphqlExpress({ 
    schema,
    context: {
        Recipe,
        User
    }
}))
app.listen(3000, () => {
    console.log('Server listening on PORT 3000')
});