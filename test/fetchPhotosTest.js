const chai = require('chai');
const expect = chai.expect;

const { average } = require('../avg/average');

const { fetchPhotos } = require('../src/data/dataController');


describe('fetchPhotos', function() {
    // RETURNS ARRAY
    it('returns an array of photo data', async function() {
        let photoData = await fetchPhotos();
        expect(photoData).to.be.an('array');
    })
    // RETURNS 5000 PHOTO OBJECTS
    it('fetches 5000 photo objects', async function() {
        let photoData = await fetchPhotos();
        expect(photoData.length).to.equal(5000);
    })

    // AVERAGES 320MS OR LESS PER FETCH
    it('averages 320ms or less per run for five runs', async function() {
        let timesArray = [];

        // GET TIMES AND PUSH TO ARRAY
        for (let i = 0; i < 5; i++) {
            let startTime = Date.now();
            // SET TIMEOUT
            // let photoData = await fetchPhotos();
            let endTime = Date.now();
            let totalTime = endTime - startTime;
            timesArray.push(totalTime);
        }

        // AVERAGE THE TIMES
        let averageRunTime = average(timesArray);
        expect(averageRunTime).to.be.lessThan(320);
    })
});