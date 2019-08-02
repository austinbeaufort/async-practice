const express = require('express');
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');

const schema = buildSchema(`

    type Stats {
        dev: Int
        mode: Int
        nlink: Int
        uid: Int
        gid: Int
        rdev: Int
        blksize: Int
        ino: Int
        size: Int
        blocks: Int
        atimeMs: Float
        mtimeMs: Float
        ctimeMs: Float
        birthtimeMs: Float
        atime: String
        mtime: String
        ctime: String
        birthtime: String
    }

    type Query {
        getStats: Stats
    }
`)



// UTIL, PROMISFY
const util = require('util');
const fs = require('fs');

// CALLBACK
// fs.stat('./twoPractice.js', (error, stats) => {
//     console.log(stats);
// })

// PROMISE
// const stat = util.promisify(fs.stat);
// stat('./twoPractice.js')
//     .then(stats => console.log(stats))
//     .catch(error => error);


// ASYNC AWAIT
const stat = util.promisify(fs.stat);

async function fetchStats() {
    stat('./twoPractice.js')
        .then(stats => stats);
}



const root = {
    getStats: (fetchStats) => {
        return fetchStats()
                .then(stats => stats);
    }
}



const app = express();
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));

app.listen(4000);