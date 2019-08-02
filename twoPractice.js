const request = require('request');
console.log(request);
// PROMISE SYNTAX
// const myPromise = new Promise((resolve, reject) => {

// })


// EXAMPLE

// let userDetails;

// function initialize() {
//     let options = {
//         url: 'https://api.github.com/users/narenaryan',
//         headers: {
//             'User-Agent': 'request'
//         }
//     };

//     return new Promise((resolve, reject) => {
//         request.get(options, (error, response, body) => {
//             if(error) {
//                 reject (error);
//             } else {
//                 resolve(JSON.parse(body));
//             }
//         })
//     })
// }

// function main() {
//     let initializePromise = initialize();
//     initializePromise.then(result => {
//         userDetails = result;
//         console.log('initiallized user details');
//         console.log(userDetails);
//     }, error => console.log(error));
// }

// main();
