const chai = require('chai');
const expect = chai.expect;

const { getPhotos } = require('../src/data/dataController');

describe('Photos Settled Array', function() {
    it('should return an array', async function() {
        let photoArray = await getPhotos();
        expect(photoArray).to.be.an('array');
    })
})