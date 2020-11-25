// import express, express-graphql, and graphql
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

// build schema, pass query 
const schema = buildSchema(`
    type Query {
        message: String
    }
`);
// root resolver to give map of actions to the function
const root = {
    message: () => 'Hello World!'
};
// create express server and a graphql endpoint
const app = express();
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

// start server listening
app.listen(4000, () => console.log('Express GraphQL Server Now Running On localhost:4000/graphql'));