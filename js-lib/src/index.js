
/**
 * Stops the program for the time (milliseconds) that's specified on 
 * parameters. Must be used on an async function.
 * 
 * @param {Number} ms Milliseconds
 */
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Generates a random number between two numbers (both included).
 * 
 * @param {Number} min The minimum number that can be returned (included).
 * @param {Number} max The maximum number that can be returned (included).
 * @returns {Number} The random number.
 */
function random(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

/**
 * Selects randomly a value of the array given in parameters.
 * 
 * @param {Array} arr The array given in parameters.
 * @returns {*} The randomly selected value of the array.
 */
function choice(arr) {
    let rnd = Math.round(Math.random()* (arr.length - 1));
    return arr[rnd];
}

/**
 * Sorts an array given as argument.
 * 
 * @param {Array} arr The array to sort.
 * @returns {Array} The sorted array.
 */
function sort(arr) {
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length; j ++) {
            let pos1 = arr[j];
            let pos2 = arr[j+1];

            if(arr[j] > arr[j+1]) {
                arr[j+1] = pos1;
                arr[j] = pos2;
            }
        }
        return arr;
    }
}

console.log(sort([9,5,7]));

module.exports = {
    choice,
    random,
    sleep,
    sort
}