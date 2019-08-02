// CREATE A NEW PROMISE OBJECT.
/*

SYNTAX
const promise = new Promise((resolve, reject) => {
    IF SUCCESSFUL, PROMISE IS FULFILLED WITH resolve().
    IF ERROR, reject() IS CALLED, PROMISE IS REJECTED.
});
*/



// PROMISES WITH XMLHTTPREQUEST
// const promise = new Promise((resolve, reject) => {
//     const request = new XMLHttpRequest();

//     request.open('GET', 'https://jsonplaceholder.typicode.com/posts/1');
//     request.onload = () => {
//         if(request.status === 200) {
//             resolve(request.response);
//         } else {
//             reject(Error(request.statusText));
//         }
//     };

//     request.onerror = () => {
//         reject(Error('Error fetching data'));
//     }

//     request.send();
// });

// console.log('request made');

// promise.then(data => {
//     console.log('data received, promise fulfilled..');
//     console.log(data);
// }, (error) => {
//     console.log('Promise rejected.');
//     console.log(error.message);
// })




// PROMISES WITH FETCH
// function status(response) {
//     if (response.status === 200) {
//         return Promise.resolve(response);
//     } else {
//         return Promise.reject(new Error(response.statusText));
//     }
// }

// function json(response) {
//     return response.json();
// }

// fetch('https://jsonplaceholder.typicode.com/posts/1')
//     .then(status)
//     .then(json)
//     .then(data => {
//         console.log(`Response fulfilled with JSON response: ${data}`);
//     }).catch(error => {
//         console.log(`Request error: ${error}`);
//     })




// PROMISE CHAINING

// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve(1), 1000);
// });

// promise
//     .then(result => {
//         console.log(result);
//         return result * 2;
//     })
//     .then(result => {
//         console.log(result);
//         return result * 2;
//     })
//     .then(result => {
//         console.log(result);
//         return result * 2;
//     })
//     .catch(err => {
//         console.log(err);
//     })



// PROMISE CHAINING, RETURNING PROMISES

// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve(1), 1000);
// });

// promise 
//     .then(result => {
//         console.log(result);
//         return new Promise((resolve, reject) => {
//             // waits for 1 sec before resolving, then passes the return value to next ".then()"
//             setTimeout(() => resolve(result * 2), 1000); 
//         })
//     })
//     .then(result => {
//         console.log(result);
//         return new Promise((resolve, reject) => {
//             // returning a promise waits for the result to settle before giving the value to next ".then()"
//             setTimeout(() => resolve(result * 2), 1000); 
//         })
//     })
//     .then(result => {
//         console.log(result);
//     })




// EXAMPLE OF CREATING A PROMISE
// const getMovie = title => {
//     return new Promise((resolve, reject) => {
//         const request = new XMLHttpRequest();

//         request.open('GET', `http://mymovieapi.com/?q=${title}`);
//         request.onload = () => {
//             if (request.status == 200){ // status 'OK', then resolve.
//                 resolve(request.response);
//             } else {
//                 reject(Error(request.statusText)); 
//             }
//         }

//         request.onerror = () => {
//             reject(Error('Error fetching data'));
//         }

//         request.send();
//     })
// }


// function waitAndReturnOne() {
//     console.log('first');
//     setTimeout(() => { console.log(1) }, 2000);
//     console.log('???');
// }


// waitAndReturnOne();
// console.log('hi');







