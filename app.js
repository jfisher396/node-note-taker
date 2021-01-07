const chalk = require('chalk');
const yargs = require('yargs');
const getNotes = require('./notes');

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: function () {
        console.log('Adding a new note!')
    }
});

yargs.command({
    command: 'remove',
    describe: 'Remove a new note',
    handler: function () {
        console.log('Removing a new note!')
    }
});

yargs.command({
    command: 'list',
    describe: 'List my notes',
    handler: function () {
        console.log('Listing the notes!')
    }
});

yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function () {
        console.log('Reading a new note!')
    }
});

console.log(yargs.argv);