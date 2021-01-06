const chalk = require('chalk');
const yargs = require('yargs/yargs');
const getNotes = require('./notes');

const command = process.argv[2];

if (command === "add") {
    console.log(chalk.black.bgYellow('Adding note'));
} else if (command === "remove") {
    console.log(chalk.black.bgRed('Removing note'));
}

