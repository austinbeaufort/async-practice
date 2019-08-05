const chai = require('chai');
const request = require('supertest');


describe('Status and Content of fetch request for photo objects', function() {
    it('returns with status code 200 OK', async function() {
        await request('http://localhost:4000')
            .get('/graphql')
            .send({ query: '{ getPhotos {id} }'})
            .expect(200)
    });

    it('returns with json content', async function() {
        await request('http://localhost:4000')
            .get('/graphql')
            .send({ query: '{ getPhotos {id, url} }'})
            .expect('Content-Type', /json/)
    })
});