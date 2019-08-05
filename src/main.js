const express = require('express');
const api = require('./graphql/index');

// STARTS SERVER
const main = () => {
    const app = express();
    app.use('/graphql', api);
    app.listen(4000);
}

module.exports = main;

