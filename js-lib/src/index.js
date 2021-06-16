
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

/**
 * Finds if some value is in the array [any type]
 * 
 * fp.search(target, array);
 * 
 * @param {*} x 
 * @param {Array} arr 
 * @returns {Boolean} true / false if the target is on the array.
 */
function search(x, arr) {
    let found;
    for (let i = 0; i < arr.length; i++) {
        if (x === arr[i]) {
            found = true;
            return found;
        }
    } return found = false;
}

/**
 * Sums all the numbers of an array. fp.sumArr([1, 2, 3]) => 6
 * 
 * @param {Array} arr Array of numbers to sum
 */
function sumArr(arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        result += arr[i];
    } return result;
}

/**
 * Splits the words of a string and returns an array of the split words
 * 
 * @param {String} phrase String to split the words of
 * @returns {Array} Array of the split words
 */
function splitWords(phrase) {
    let words = [];
    let word;
    let lastSpace = 0;
    for (let i = 0; i < phrase.length; i++) {
        if (phrase[i] === ' ') {
            word = phrase.slice(lastSpace, i);
            words.push(word);
            lastSpace = i + 1;
        }
    }
    // Push last word
    word = phrase.slice(lastSpace, phrase.length);
    words.push(word);
    return words;
}


/**
 * Divide the array into a bidimensional array
 * 
 * @param {Array} arr 
 * @param {Number} n 
 * @returns {Array} bidimensional array
 */

function groupArr(arr, n) {
  
    let newArr = [];
  
      for (let i = 0; i < arr.length; i += n) {
  
          let childArr = arr.slice(i, i + n);
          newArr.push(childArr)
      }
      
      return newArr;
  
}

module.exports = {
    choice,
    random,
    sleep,
    sort,
    isPrime,
    isNumber,
    isDecimal,
    search,
    sumArr,
    splitWords,
    groupArr
}