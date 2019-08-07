"use strict";

var express = require('express');

var api = require('./graphql/index'); // STARTS SERVER


var main = () => {
  var app = express();
  app.use('/graphql', api);
  app.listen(4000);
};

module.exports = main;