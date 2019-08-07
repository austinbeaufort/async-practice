"use strict";

var graphqlHTTP = require('express-graphql');

var schema = require('./schema');

var dataController = require('../data/dataController'); // GRAPHQL SETUP


var api = graphqlHTTP({
  schema: schema,
  rootValue: dataController,
  graphiql: true
});
module.exports = api;