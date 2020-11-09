
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

/**
 * Returns true or false depending of the number given as argument is prime or not.
 * 
 * @param {Number} num The number to evaluate if it's prime or not.
 * @returns {Boolean} If it's prime or not.
 */
function isPrime(num) {
    if (num === 0 || num === 1){
        return false; // Not prime.
    } 
    for (let i = 2; i < num / 2; i++) {
        if (num % i === 0) {
            return false; // Not prime.
        }
    }
    return true; // Is prime!
}

/**
 * Given an argument, determinates if it's a number or not.
 * 
 * @param {*} x Argument to evaluate if it's a number or not.
 * @returns {Boolean} If it's a number or not.
 */
function isNumber(x) {
    if(isNaN(x)) {
        return false;
    } else {
        return true;
    }
}

/**
 * Given a number as argument, evaluates if it's decimal or not.
 * 
 * @param {Number} num The number to evaluate if it is decimal or not.
 * @returns {Boolean} If it's decimal or not.
 */
function isDecimal(num) {
    if (num % 1 === 0) {
        return false;
    } else {
        return true;
    }
}

module.exports = {
    choice,
    random,
    sleep,
    sort,
    isPrime,
    isNumber,
    isDecimal
}