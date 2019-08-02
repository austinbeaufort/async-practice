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
        getStats: String
        writeName: String
    }
`)



// UTIL, PROMISFY
const util = require('util');
const fs = require('fs');

// CALLBACK
// function findStats() {
//     fs.stat('./twoPractice.js', (error, stats) => {
//         console.log(stats);
//         return stats;
//     })
// }


// PROMISE
// const stat = util.promisify(fs.stat);
// stat('./twoPractice.js')
//     .then(stats => console.log(stats))
//     .catch(error => error);


// ASYNC AWAIT
// async function fetchStats() {
//     const stat = util.promisify(fs.stat);
//     stat('./twoPractice.js')
//         .then(stats => {
//             console.log(stats);
//             return stats;
//         });
// }




const root = {

    // FIRST WAY
    // findStats: async() => {
    //     const readFile = util.promisify(fs.readFile);
    //     return readFile('./test.txt', 'utf-8');
    // },

    // getStats: () => {
    //     return root.findStats()
    //                 .then(results => results);
    // },

    findStats: async() => {
        const readFile = util.promisify(fs.readFile);
        return readFile('./test.txt', 'utf-8');
    },

    settleData: async() => {
        return await root.findStats();
    },

    getStats: () => {
        return root.settleData();
    },
}


const app = express();
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));

app.listen(4000);