
const util = require('util');
const fs = require('fs');


const root = {
    findStats: async() => {
        const readFile = util.promisify(fs.readFile);
        return readFile('./helloworld.txt', 'utf-8');
    },

    settleData: async() => {
        return await root.findStats();
    },

    getStats: () => {
        return root.settleData();
    },
}

module.exports = root;