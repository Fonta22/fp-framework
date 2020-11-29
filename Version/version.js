const clc = require('cli-color');
const ver = require('../ver.json');
const text = clc.redBright('Version');
console.log(text + ': ' + ver.version + '\n');