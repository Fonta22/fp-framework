
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

module.exports = {
    choice,
    random,
    sleep
}