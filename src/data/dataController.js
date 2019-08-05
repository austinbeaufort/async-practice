
const util = require('util');
const fs = require('fs');
const axios = require('axios');


const root = {
    findFile: async() => {
        const readFile = util.promisify(fs.readFile);
        return readFile('./helloworld.txt', 'utf-8');
    },

    settleData: async() => {
        let textString = await root.findFile();
        return textString;
    },

    getFile: () => {
        return root.settleData();
    },

    fetchPhotos: async() => {
        let photoObject = await axios.get('https://jsonplaceholder.typicode.com/photos');
        return photoObject.data;
    },

    getPhotos: () => {
        return root.fetchPhotos();
    }
}

module.exports = root;