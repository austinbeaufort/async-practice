const graphqlHTTP = require('express-graphql');
const schema = require('./schema');
const dataController = require('../data/dataController');

// GRAPHQL SETUP
let api = graphqlHTTP({
    schema: schema,
    rootValue: dataController,
    graphiql: true,
});

module.exports = api;