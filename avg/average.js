const h = {
    average: argumentsArray => {
        let numberOfItemsInList = argumentsArray.length;
        let total = argumentsArray.reduce((a, b) => a + b);
        let average = total / numberOfItemsInList;
        return average;
    }
}


module.exports = h;