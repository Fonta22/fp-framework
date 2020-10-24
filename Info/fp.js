const clc = require('cli-color');
const proj = clc.redBright('fp-new-project');
const version = clc.redBright('fp-version');
const github = clc.redBright('GitHub repo');
const title = clc.redBright('fp-framework');

console.log('                                                            ');
console.log('.d$$$$$$$$$$$$$$   d$$$$$$$$$$         '+title+'         ');
console.log('$$$$$$$$$$$$$$$P   $$$$$$$$$$$$$       ---------------------');
console.log('$$$$\'              $$$$\'     \'$$$      '+proj+': create a new project ');
console.log('$$$$               $$$$       $$$$     '+version+': shows the current version of FP                     ');
console.log('$$$$$$$$$$b        $$$$       $$$$                          ');
console.log('$$$$$$$$$$$        .$$$$     $$$$                           ');
console.log('$$$$\'              $$$$$$$$$$$$$                           ');
console.log('$$$$               $$$$$$$$$P\'                             ');
console.log('$$$$               $$$$\'                                   ');
console.log('$$P                $$$P                '+github+': github.com/Fonta22/fp-framework                     ');
console.log('                                                            ');