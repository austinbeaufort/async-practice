
const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;


const { findFile, 
        settleData, 
        getFile,
        fetchPhotos,
        getPhotos
      } = require('../src/data/dataController');



describe('Get Text Files', function() {

    describe('getFile', function() {
        it('returns a string of text from a text file', async function() {
            let resultText = await getFile();
            expect(resultText).to.be.a('string');
        })
    
        it('returns the text "hello world!!"', async function() {
            const resultString = await getFile();
            expect(resultString).to.equal('hello world!!');
        })
    })


    describe('settleData', function() {
        it('returns a resolved string from a pending promise', async function() {
            let textString = await findFile();
            expect(textString).to.be.a('string');
        })
    })
})




