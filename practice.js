// ASYNC

// AN ASYNC FUNCTION ALWAYS RETURNS A PROMISE
/*
    async function returnNum() { 
        // Promise.resolve(1), but async automatically wraps the value in a resolved promise.
        return 1;     
    }

    returnNum()
        .then(result => console.log(result));
*/



// ASYNC AWAIT
/*
    async function returnString() {
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => resolve('done!'), 1000);
        });

        // USING AWAIT
        // let result = await promise;
        // console.log(result);


        // USING A PROMISE INSTEAD OF AWAIT
        // promise
        //     .then(result => console.log(result));
    }

    returnString();
*/


/*
    async function returnNum() {
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => resolve(1), 1000);
        });

        let firstTotal = await promise;
        console.log(firstTotal);

        let secondTotal = firstTotal * 2;
        console.log(secondTotal);

        let thirdTotal = secondTotal * 2;
        console.log(thirdTotal);
    }

    returnNum();
*/




/*
// ASYNC AWAIT WITH PROMISE.ALL()

    function returnOne() {
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => resolve(1), 1000);
        });

        return promise;
    }

    function returnTwo() {
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => resolve(2), 1000);
        });

        return promise;
    }

    function returnFour() {
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => resolve(4), 1000);
        });

        return promise;
    }




    async function getUsers() {
        let numArray = await Promise.all([returnOne(), returnTwo(), returnFour()]);
        console.log(numArray);
    }

    getUsers();
*/


/*

// PRACTICE
// //Write a function testNum that takes a number as an argument 
// and returns a Promise that tests if the value is less than or 
// greater than the value 10.

function testNum(num) {
    let promise = new Promise((resolve, reject) => {
        if(num > 10) {
            resolve(`${num} is greater than 10!`);
        } else if(num < 10) {
            reject(`${num} is less than 10`);
        } else {
            console.log(`Error`)
        }
    })
    return promise;
}

testNum(11)
    .then(result => console.log(result))
    .catch(err => console.log(err));

*/



