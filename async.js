// loading an image using callbacks

// function loadAsset(url, type, callback) {
//     let xhr = new XMLHttpRequest();
//     xhr.open('GET', url);
//     xhr.responseType = type;

//     xhr.onload(() => {
//         callback(xhr.response);
//     });

//     xhr.send();
// }

// function displayImage(blob) {
//     let objectURL = URL.createObjectURL(blob);

//     let image = document.createElement('img');
//     image.src = objectURL;
//     document.body.appendChild(image);
// }

// loadAsset('coffee.jpg', 'blob', displayImage);



// ASYNC FUNCTION
// async function hello() {
//     return `hello`;
// }

// hello()
//     .then(resultReturned => console.log(resultReturned));




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

async function getStats() {
    let stats = await stat('./twoPractice.js');
    console.log(stats);
}

getStats();





