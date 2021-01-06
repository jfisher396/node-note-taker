const chalk = require('chalk');

const getNotes = require('./notes');

console.log(chalk.red.bgYellow(getNotes()));
console.log(chalk.black.bgGreen.bold('Hello'));